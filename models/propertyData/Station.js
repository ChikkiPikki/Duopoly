var mongoose = require("mongoose");

var Station = new mongoose.Schema({
  name: String,
  price: Number,
  personOn: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LivePlayer",
    },
    name: String,
  },
  ownedBy: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LivePlayer",
    },
    name: String,
  },
  otherStations: Number,
  rent: Array /*[this.otherStations]*/, //THIS OPERATION HAS TO BE TAKEN INTO ACCOUNT FOR THE GAME
});

module.exports = mongoose.model("Station", Station);
