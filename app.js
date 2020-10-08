//Required modules
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var session = require("express-session");
var MongoDBStore = require('connect-mongodb-session')(session);
var app = express();


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser());

app.set("view engine", "ejs");


var store = new MongoDBStore({
    uri: process.env.DB,
    collection: 'playerSessions',

});
store.on('error', function(error) {
    console.log(error);
});

app.use(session({
    secret: 'Do I need To Worry about copyright? Probably not, I will ask them for a contract',
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 28 // 4 weeks
    },
    store: store,

    resave: false,

    saveUninitialized: false,

}));

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function(err) {
    if (err) {
        console.log(err)
    }
});



app.get("/", (req, res) => {
    res.send(req.session.id)
});
app.post("/register", (req, res) => {
    console.log(req.body);
});


app.get("/create-game/:name", (req, res) => {
    if (!(req.signedCookies.uuid)) {
        res.redirect("/");
    }

    Player.findOne({
        uuid: req.signedCookies.uuid
    }, (err, foundPlayer) => {
        if (err) {
            res.redirect("/")
        } else {
            Game.create({
                code: 
                date: Date(),
                startedOrEnded: false
                 
            }, (err, newGame) => {
                if (err) {
                    res.redirect("/")
                } else {
                    LivePlayer.create({
                        details: {
                            id: foundPlayer._id,
                            name: foundPlayer.name
                        }, //area of doubt
                        isHost: true,
                        game: {
                            id: newGame._id,
                            code: newGame.code
                        },
                        notes: [5, 5, 6, 2, 2, 2],
                        isOnPosition: 1
                    }, (err, createdLivePlayer)=>{
                    		foundPlayer.games.append({
                        	id: newGame._id,
                        	wasHost: true
                    	});
                    	foundPlayer.save();
                    	newGame.host = {id:foundPlayer._id, name:foundPlayer.name};
                    	newGame.save()
                    	res.render("game", {hostPlayer: });
                    	newGame.players.append({id:createdLivePlayer._id, name: createdLivePlayer.details.name})
                    });
                    
                };
            });

        };
    });

});

app.get("/join-game/:name", (req, res) => {
    if (!(req.signedCookies.uuid)) {
        res.redirect("/")
    }

    Player.findOne({
        uuid: req.signedCookies.uuid
    }, (err, foundPlayer) => {
        if (err) {
            res.redirect("back")
        } else {
            Game.findOne({
                code: req.params.name,
                startedOrEnded: false
            }, (err, foundGame) => {
                if (err) {
                    res.redirect("/");
                } else {
                    LivePlayer.create({
                        details: {
                            id: foundPlayer._id,
                            name: foundPlayer.name
                        },
                        isHost: false,
                        game: {
                            id: foundGame._id,
                            code: foundGame.code
                        }
                        notes: [5, 5, 6, 2, 2, 2],
                        isOnPosition: 1
                    }, (err, createdLivePlayer)=>{
                    	foundPlayer.games.append({
                        	id: foundGame._id,
                        	wasHost: false
                    	});
                    	foundPlayer.save()
	                    res.render("mainGame", {player: createdLivePlayer});
	                    foundGame.players.append({id: createdLivePlayer._id, name: createdLivePlayer.details.name});
	                    foundGame.save()
                    });

                }
            })
        }
    })
});


app.get("/start-game", (req, res)=>{

});


app.listen(process.env.PORT, () => {
    console.log('Process begun');
});