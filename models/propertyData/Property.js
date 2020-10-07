//live game data
var mongoose = require("mongoose");


var Property = new mongoose.Schema({
	price: Number,
	name: String,
	mortgageValue: Number,
	ownedBy: { 
		id:{
			type: mongoose.Schema.types.ObjectId,
			ref: "Player"

		},
		name: String
	},
	upgradePrice: Number,
	houses: Number,
	otherProperties: Number,
	position: Number,
	type: String,
	hotelPossible: Boolean,
	hotel: Boolean,
	personOn: {
		id:{
		ref: "Player"
		type: mongoose.Schema.types.ObjectId,

		},
		name: String
	},
	rents: [Number]//normal, set, 1h, 2h, 3h, 4h, hotel
	
});
module.exports = mongoose.model("Property", Property)