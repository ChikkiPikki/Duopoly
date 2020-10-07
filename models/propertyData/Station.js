var mongoose = require("mongoose");

var Station = mongoose.Schema({
	name: String,
	price: Number,
	personOn:{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Player"
		},
		name: String
	},
	ownedBy:{
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Player"
		},
		name: String
	},
	otherProperties: Number
})