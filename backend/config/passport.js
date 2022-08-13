const GoogleStrategy = require("passport-google-oauth20").Strategy;

const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (_accessToken, _refreshToken, profile, callback) {
      // logic about database
      // ....

      callback(null, profile);
    }
  )
);
