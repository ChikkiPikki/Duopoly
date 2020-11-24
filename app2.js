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

app.get("/game/:gameCode", (req, res)=>{
    res.render("cross-server-trial.ejs", {
        date: new Date(),
        ip: req.ip,

    })
})