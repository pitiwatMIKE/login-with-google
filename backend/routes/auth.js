const router = require("express").Router();
const passport = require("passport");
const { generateJwtToken } = require("../utils/generateToken");

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: process.env.CLIENT_URL + "/login",
    // successRedirect: process.env.CLIENT_URL+"/test",
  }),
  function (req, res) {
    try {
      let user = {
        name: req.user._json.name,
        email: req.user._json.email,
      };

      let token = generateJwtToken(user);
      res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
    } catch (e) {
      res.status(401).redirect(`${process.env.CLIENT_URL}/failed`);
    }
  }
);

module.exports = router;
