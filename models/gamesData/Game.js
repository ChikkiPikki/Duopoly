var mongoose = require("mongoose");

var Game = new mongoose.Schema({
	players: [
		id: {
			type: mongoose.Schema.types.objectId,
			ref: "LivePlayer"
		},
		name: String
	],
	turn: Number,
	code: String,
	date: Date,
	host: {
		id: {

			type: mongoose.Schema.types.ObjectId,
			ref: "Player"
		},
			name: String
		},
	log: []

});

module.exports = mongoose.model("Game", Game)