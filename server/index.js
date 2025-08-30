const express = require("express");
const app = express();
require("dotenv").config();
const router = express.Router();
const cors = require("cors");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors())
const userRegister = require("./routes/register");
app.use("/register",userRegister);
app.listen(3001,console.log("server running"));