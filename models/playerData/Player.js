var mongoose = require("mongoose");

var Player = new mongoose.Schema({
  uuid: String,
  name: String,
  password: String,
  lastOnline: Date,
  games: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game"
      },
      wasHost: Boolean,
      netWorth: Number
    }
  ],
  friends: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
      }
    }
  ]
});

module.exports = mongoose.model("Player", Player);
