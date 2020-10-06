var mongoose = require("mongoose");



var Player = mongoose.Schema({
	name: String,
	password: String,
	lastOnline: Date,
	games: [{
		// type: mongoose.Schema.types.ObjectId,
		// ref: Game
	}],
	friends: [{
		// type: mongoose.Schema.types.objectId,
		// ref: Player
	}],

});

module.exports = mongoose.model("Player", Player)