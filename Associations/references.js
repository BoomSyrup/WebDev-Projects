var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2", {useMongoClient: true});

var Post = require("./models/post.js");
var User = require("./models/user.js");


User.findOne({email:"waddup@waddup.com"}, function(err, user)
{
  console.log(user);
});

// Post.create({
//   title: "How to cook Bento Box",
//   content: "Get the best beef"
// },function(err, post)
// {
//   if(err)
//     console.log(err);
//   else {
//     User.findOne({email:"waddup@waddup.com"}, function(err, user)
//   {
//     if(err)
//       console.log(err);
//     else {
//       user.posts.push(post);
//       user.save(function(err, data)
//     {
//       if(err)
//         console.log(err);
//       else {
//         console.log(data);
//       }
//     })
//     }
//   });
//   }
// });

// User.create({
//   email:"waddup@waddup.com",
//   name: "Mr.Waddup"
// });
