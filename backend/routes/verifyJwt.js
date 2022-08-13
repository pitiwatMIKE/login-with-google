const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/jwt", (req, res) => {
  let authorization = req.headers.authorization;
  let token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
    if (err) {
      res.status(422).json({ result: false, message: "vertify token failed" });
    } else {
      res.json({ result: true, message: "vertify token success" });
    }
  });
});

module.exports = router;
