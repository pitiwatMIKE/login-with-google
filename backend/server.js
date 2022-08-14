require("dotenv").config();
const express = require("express");
const cors = require("cors");
var cookieParser = require('cookie-parser')
const app = express();

require("./db/myDB").connect();
require("./config/passport");
const auth = require("./routes/auth");
const verifyJwt = require("./routes/verifyJwt");

app.use(cors());
app.use(cookieParser())

app.use("/auth", auth);
app.use("/verify", verifyJwt);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
