var mongoose = require("mongoose")

var LivePlayer = mongoose.Schema({
	details: {
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Player"
		},
		name: String
	},
	ownedProperties:[{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Property"
		},
		name: String,
		type: String,
		otherProperties: Number
	}],
	isHost: Boolean,
	turn: Number,
	isOnPosition: Number
	notes:[Number],//1,5,10,20,50,100,500
	debtToBank: Number,
	debtToPlayers: [{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Player"
		},
		debt: Number
	}]
});	

module.exports = mongoose.model("LivePlayer", LivePlayer);