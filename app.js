//Required modules
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var session = require("express-session");

var app = express();
// var Player = require("./models/playerData/Player");
// var LivePlayer = require("./models/playerData/LivePlayer");
// var Game = require("./models/gamesData");
// var DeedsData = require("./models/propertyData/Data");
// var Utility = require("./models/propertyData/Utility");
// var Property = require("./models/propertyData/Property");
// var Station = require("./models/propertyData/Station");

// var PropertyData = DeedsData[0];
// var StationData = DeedsData[1];
// var UtilityData = DeedsData[2];

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieParser());

app.set("view engine", "ejs");
app.use("/resources", express.static("resources"));

// var store = new MongoDBStore({
//     uri: process.env.DB,
//     collection: 'playerSessions',

// });
// store.on('error', function(error) {
//     console.log(error);
// });

// app.use(session({
//     secret: 'Do I need To Worry about copyright? Probably not, I will ask them for a contract',
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 28 // 4 weeks
//     },
//     store: store,

//     resave: false,

//     saveUninitialized: false,

// }));
//
// mongoose.connect(process.env.DB, {
//     useNewUrlParser: true,
//     useMongoClient: true,
//     useUnifiedTopology: true
// }, (err)=> {
//     if (err) {
//         console.log(err)
//     }
// });
// mongoose.Promise = global.Promise;
// const db = mongoose.connection
// app.use(session({
//     secret: 'Do I need To Worry about copyright? Probably not, I will ask them for a contract',
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongooseConnection: db })
// }));

app.get("/", (req, res) => {
  res.render("home-page");
});
app.get("/samplee", (req, res) => {
  res.render("logo-sample");
});
app.get("/login", (req, res) => {
  res.render("login-signup-page");
});
app.get("/play-a-game", (req, res) => {
  res.render("join-game-dashboard");
});
app.get("/home", (req, res) => {
  res.render("dashboard");
});
app.post("/login", (req, res) => {
  console.log(req.body);
  var username = req.body.username;
  var password = req.body.username;
  // Player.findOne({name:username, password:password})
});
app.post("/register", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  var name = req.body.name;
  var email = req.body.email;
  console.log(req.body);
  // Player.findOne({req.body.username}, function(err, foundPlayer){
  // if(foundPlayer){
  // res.write("We are sorry, but a user with the same username already exists, please keep a different username")
  // }
  // })
});
app.get("/asdff", (req, res) => {
  res.render("sample2");
});
app.get("/player-info/:player", (req, res)=>{
  //// Find player from database and render the file with his/her info
  //res.render("player-data", {info: foundPlayer})
}); 

app.get("/create-game/:name", (req, res) => {
  if (!req.signedCookies.uuid) {
    res.render("login-signup-page", {
      message: "Please Sign-in or Register before Playing",
      redirectGame: req.params.name,
      method: "create",
    });
  }

  Player.findOne(
    {
      uuid: req.signedCookies.uuid,
    },
    (err, foundPlayer) => {
      if (err || !foundPlayer) {
        res.render("error", {
          message:
            "Your Device is Not Authorised, please login or Sign-up first to play",
        });
      } else {
        Game.create(
          {
            code: req.params.code,
            date: new Date(),
            startedOrEnded: false,
            turn: 1,
          },
          (err, newGame) => {
            if (err) {
              res.redirect("/");
            } else {
              LivePlayer.create(
                {
                  details: {
                    id: foundPlayer._id,
                    name: foundPlayer.name,
                  },
                  isHost: true,
                  game: {
                    id: newGame._id,
                    code: newGame.code,
                  },
                  notes: [5, 5, 6, 2, 2, 2],
                  isOnPosition: 1,
                  piece: newGame.pieces[0],
                  turn: 1,
                },
                (err, createdLivePlayer) => {
                  foundPlayer.games.append({
                    id: newGame._id,
                    wasHost: true,
                  });
                  foundPlayer.save();
                  newGame.host = {
                    id: foundPlayer._id,
                    name: foundPlayer.name,
                  };

                  newGame.players.append({
                    id: createdLivePlayer._id,
                    name: createdLivePlayer.details.name,
                  });
                  newGame.logs.append(
                    createdLivePlayer.name +
                      "created a new game : " +
                      new Date()
                  );
                  newGame.save();
                }
              );
            }
          }
        );
      }
    }
  );
});

app.get("/join-game/:name", (req, res) => {
  if (!req.signedCookies.uuid) {
    res.render("login-signup-page", {
      message: "Please Sign-in or Register before Playing",
      redirectGame: req.params.name,
      method: "join",
    });
  }

  Player.findOne(
    {
      uuid: req.signedCookies.uuid,
    },
    (err, foundPlayer) => {
      if (err || !foundPlayer) {
        res.render("login-signup-page", {
          message: "Please Sign-in or Register before Playing",
        });
      } else {
        Game.findOne(
          {
            code: req.params.name,
            startedOrEnded: false,
          },
          (err, foundGame) => {
            if (err || !foundGame) {
              res.redirect("404-game-error", {
                message:
                  "Game not found, create one by pressing the button below",
              });
            } else {
              LivePlayer.create(
                {
                  details: {
                    id: foundPlayer._id,
                    name: foundPlayer.name,
                  },
                  isHost: false,
                  game: {
                    id: foundGame._id,
                    code: foundGame.code,
                  },
                  notes: [5, 5, 6, 2, 2, 2],
                  isOnPosition: 1,
                  piece: foundGame.pieces[foundGame.players.length],
                  trun: foundGame.players.length + 1,
                },
                (err, createdLivePlayer) => {
                  if (err) {
                    res.redirect("back");
                  } else {
                    foundPlayer.games.append({
                      id: foundGame._id,
                      wasHost: false,
                    });
                    foundPlayer.save();
                    foundGame.players.append({
                      id: createdLivePlayer._id,
                      name: createdLivePlayer.details.name,
                    });
                    foundGame.logs.append(
                      createdLivePlayer.name + "joined : " + new Date()
                    );
                    foundGame.save();
                  }
                }
              );
            }
          }
        );
      }
    }
  );
});

app.post("/start/:name", (res, req) => {
  if (!req.signedCookies.uuid) {
    res.render("login-signup-page", {
      message: "Please sign-in or register before Playing",
    });
  } else {
    Player.findOne(
      {
        uuid: req.body.uuid,
      },
      (err, foundPlayer) => {
        if (err || !foundPlayer) {
          res.redirect("/login?message=unauthorised");
        }
        LivePlayer.findOne(
          {
            details: {
              id: foundPlayer._id,
            },
            game: {
              code: req.params.name,
            },
          },
          (err, foundLivePlayer) => {
            if (err || !foundLivePlayer) {
              res.redirect("/?message=not");
            } else {
              if (foundLivePlayer.isHost == false) {
              } else {
                Game.findOne(
                  {
                    code: req.params.name,
                    host: {
                      id: foundLivePlayer._id,
                    },
                  },
                  (err, foundGame) => {
                    if (err || !foundGame) {
                      res.render(path);
                    } else {
                    }
                  }
                );
              }
            }
          }
        );
      }
    );
  }
});

app.get("/asdf", (req, res) => {
  res.render("sample");
});
app.get("/credits", (req, res) => {
  res.render("credits-page");
});
app.get("/devtalk", (req, res) => {
  res.render("devtalk");
});
app.get("/blog", (req, res) => {
  res.redirect("https://read-a-lot.herokuapp.com");
});
app.get("/bugs", (req, res) => {
  res.render("bugs-page");
});
app.post("/bugs", (req, res) => {
  res.render("bug-reported", {
    message: "Your issue has been reported. We will get to you soon",
  });
  var issue = req.body.issue;
  var userEmail = req.body.email;
});
app.listen(process.env.PORT, () => {
  console.log("Process begun");
});
