var mongoose = require("mongoose");

var Station = mongoose.Schema({
	name: String,
	price: Number,
	personOn:{
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "LivePlayer"
		},
		name: String
	},
	ownedBy:{
		id:{
			type: mongoose.Schema.Types.ObjectId,
			ref: "LivePlayer"
		},
		name: String
	},
	otherStations: Number
	rent: [25, 50, 100, 200][this.otherStations]
});


module.exports = mongoose.model("Station", Station);