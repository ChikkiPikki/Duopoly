
//Required modules
var express 	 = require ("express");
var mongoose 	 = require("mongoose");
var bodyParser 	 = require("body-parser");
var cookieParser = require('cookie-parser');
var mongoose 	 = require("mongoose");
var passport 	 = require("passport");
var LocalStrategy= require("passport-local")
var app 		 = express();


app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());

app.set("view engine", "ejs");

mongoose.connect(process.env.DB, {useNewUrlParser: true,   useUnifiedTopology: true } , function(err){
	if(err){
		console.log(err)
	}
});

var Player = require(__dirname + "/models/playerData/Player");
var Game = require(__dirname + "/models/gamesData/Game");


app.get("/", (req, res)=>{
	res.render("home-page")
});

app.get("/play-monopoly", (req, res)=>{
	res.render("register-page")
});

app.post("/play-monopoly", (req, res)=>{
	let name = req.body.name;
	let password = req.body.password;
	Player.findOne({name: name}, (err, data)=>{
		if(err){
			res.render("register-page", {message: "Someone is already registered with this name, please try something else"})
		}else{
			Player.findOne({name: userName}, (err, foundUser)=>{
				if(!foundUser){
					Player.create({name: userName, password: password},(err, createdPlayer)=>{
						res.render("game", {player: createdPlayer})
					})

				}else{
					res.render("register-page", {message:"Someone is already registered with this name, please try something else"})
				}
			})
		}
	});




});
app.get("/join/:name", (req, res)=>{

});
app.listen(process.env.PORT, ()=>{
	console.log('Process begun');
});

