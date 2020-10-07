var mongoose = require("mongoose");

var LivePlayer = mongoose.Schema({
	game: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref:"Game"
		},
		code: String
	},
	details: {
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Player"
		},
		name: String
	},
	ownedProperties:[{
		id:{
			type: mongoose.Schema.Types.ObjectId,
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
			type: mongoose.Schema.Types.ObjectId,
			ref: "LivePlayer"
		},
		debt: Number
	}],
	unreceivedDebt:[{
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "LivePlayer"
		},
		debt: Number
	}]
});	

module.exports = mongoose.model("LivePlayer", LivePlayer);