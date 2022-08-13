const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../db/models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    async function (_accessToken, _refreshToken, profile, callback) {
      // logic about database
      let email = profile._json.email;
      if (!email) return res.status(422);

      try {
        const user = await User.findOne({
          email: email,
          provider: "google",
        });

        if (!user) {
          const create = new User({
            email: email,
            provider: "google",
          });
          await create.save();
        }
        callback(null, profile);
      } catch (e) {
        callback(null, false);
      }
    }
  )
);
