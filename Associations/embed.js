var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo", {useMongoClient: true});

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);


var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts:[postSchema]
});

var User = mongoose.model("User",userSchema);

// var newUser = new User({
//   email: "baby@driver.edu",
//   name: "Baby",
// });
//
// newUser.posts.push({
//   title: "How to drive a car",
//   content: "Just listen to music"
// })
//
// newUser.save(function(err, user)
// {
//   if(err)
//     console.log(err);
//   else
//     console.log(user);
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious."
// });
//
// newPost.save(function(err, post)
// {
//   if(err)
//     console.log(err);
//   else
//     console.log(post)
// });

User.findOne({name: "Baby"}, function(err, user)
{
  if(err)
    console.log(err);
  else
  {
    user.posts.push({
      title: "3 things I hate about you",
      content: "jk I love you"
    });
    user.save(function(err, user)
    {
      if(err)
        console.log(err);
      else
        console.log(user);
    });
  }
});
