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
	startedOrEnded: Boolean,
	pieces: arrShuf(["boot", "car", "cat", "hat", "ship", "thimble", "wheelbarrow"])

});


function arrShuf(array){ 
	for(let i = array.length — 1; i > 0; i--){
  		const j = Math.floor(Math.random() * i)
  		const temp = array[i]
  		array[i] = array[j]
  		array[j] = temp
  		
	}
	return array
}
module.exports = mongoose.model("Game", Game)