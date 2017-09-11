var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var campData = [
  { name: "Jumbo Tent",
   image: "http://www.experienceholidays.co.uk/wp-content/uploads/2014/04/Adventurer-tent-at-sunset.jpg",
  description: "Has a nice view and a lot of elephants"},
  { name: "Medium Tent",
   image: "http://www.goeringo.com/wp-content/uploads/Bush-Tent.jpg",
  description: "Cosy tent with a nice view"},
  { name: "Small Tent",
   image: "http://www.equitours.com/wp-content/uploads/2014/02/tent-and-shower1.jpg",
  description: "Good Luck"}
]

function seedDb()
{
  Campground.remove({}, function(err)
  {
    // if(err)
    //   console.log(err);
    // campData.forEach(function(camp){
    // Campground.create(camp, function(err, camp)
    // {
    //   if(err)
    //     console.log(err);
    //   else {
    //     console.log(camp);
    //     //create a comment
    //     Comment.create({
    //       text: "This place is great but I wish there was internet",
    //        author: "Arther"},function(err, comment)
    //      {
    //        if(err)
    //          console.log(err);
    //        else
    //        {
    //         camp.comments.push(comment);
    //         camp.save()
    //         console.log("created comment")
    //       }
    //      });
    //    }
    // });
    // });
  });
}

module.exports = seedDb;
