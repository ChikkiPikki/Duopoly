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

			type: mongoose.Schema.Types.ObjectId,
			ref: "Player"
		},
			liveName: String,

		},
	log: [],
	startedOrEnded: Boolean

});

module.exports = mongoose.model("Game", Game)