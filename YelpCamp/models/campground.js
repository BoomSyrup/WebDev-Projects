var mongoose = require("mongoose");
var campGroundSchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    description: String,
    author: {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        red: "User"
      },
      username: String
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
      }
    ],
    price: String,
    createdAt: {type: Date, default: Date.now}
  });
module.exports = mongoose.model("Campground",campGroundSchema);
