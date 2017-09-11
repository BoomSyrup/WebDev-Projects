var express = require("express");
var router = express.Router({mergeParams: true});
var Campground = require("../models/campground"),
    Comment = require("../models/comment");
var middleware = require("../middleware");


router.get("/new", middleware.isLoggedIn, function(req,res)
{
  Campground.findById(req.params.id, function(err, camp){
    if(err)
      console.log(err);
    else
      res.render("comments/new",{campground: camp})
  });
});

router.post("/", middleware.isLoggedIn, function(req, res)
{
  Campground.findById(req.params.id, function(err, camp){
    if(err)
    {
      req.flash("error", "Campground Not Found");
      res.redirect("/campgrounds");
    }
    else
    {
      Comment.create(req.body.comment, function(err, comment)
      {
        if(err)
          console.log(err);
        else {
          comment.author.id = req.user._id;
          comment.author.username = req.user.username;
          comment.save();
          camp.comments.push(comment);
          camp.save();
          req.flash("success","Successfully Added Comment ")
          res.redirect("/campgrounds/" + camp._id);
          }
    });
    }
  });
});

router.get("/:comment_id/edit", middleware.isCommentOwner, function(req ,res){
  Comment.findById(req.params.comment_id, function(err, comment)
  {
  if(err)
    redirect("/campgrounds/"+req.params.id+"/comments");
  else
    res.render("comments/edit", {campground_id: req.params.id, comment: comment});
  })
});

router.put("/:comment_id", middleware.isCommentOwner, function(req, res)
{
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, comment)
  {
  if(err)
    redirect("back");
  res.redirect("/campgrounds/"+req.params.id);
  })
});

router.delete("/:comment_id", middleware.isCommentOwner, function(req, res)
{
  Comment.findByIdAndRemove(req.params.comment_id, function(err)
  {
  if(err)
    res.redirect("back");
  req.flash("success", "Successfully Deleted Comment");
  res.redirect("/campgrounds/"+req.params.id);
  })
});

module.exports = router;
