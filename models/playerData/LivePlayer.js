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
	isOnPosition: Number,
	notes:[Number],//1,5,10,20,50,100,500
	netWorth:Number, /*this.notes[0]*1 + this.notes[1]*5 + this.notes[2]*10 + this.notes[3]*20 + this.notes[4]*50 + this.notes[5]*100 + this.notes[6]*500*/
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
	}],
	piece: String
});

module.exports = mongoose.model("LivePlayer", LivePlayer);
