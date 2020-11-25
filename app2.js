var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var session = require("express-session");

var app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
let authorized = false;

function checkAuth(req, res, next) {
  if (authorized) {
    next();
  } else {
    res.status(403).send("Unauthorized!");
    return;
  }
}

app.use("/", checkAuth);

// app.get("/", (req, res) => {
//   res.send("sup");
// });
app.listen("8080", () => {
  console.log("up and running");
});
