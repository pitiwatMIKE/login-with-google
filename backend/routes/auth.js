const router = require("express").Router();
const passport = require("passport");

router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
