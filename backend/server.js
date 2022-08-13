require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const auth = require("./routes/auth");

app.use(cors());

app.use("auth", auth);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server running on port " + port));
