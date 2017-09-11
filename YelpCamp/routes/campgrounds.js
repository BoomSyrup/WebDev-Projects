var express = require("express");
var router = express.Router();
var Campground = require("../models/campground"),
    Comment = require("../models/comment");
var middleware = require("../middleware");

router.get("/", function(req, res)
{
  Campground.find({},function(err, campgrounds)
{
  if(err)
    console.log(err);
  else
    res.render("campgrounds/index",{campgrounds: campgrounds});
});
});
//CREATE
router.post("/", middleware.isLoggedIn, function(req, res)
{
  var name = req.body.name;
  var url = req.body.image;
  var desc = req.body.description;
  var price = req.body.price;
  var author = {
    id: req.user._id,
    username: req.user.username};
  Campground.create({name: name, price: price, image: url, description: desc, author: author}, function(err, newlyCreated)
  {
    if(err)
      console.log(err);
    else
      res.redirect("campgrounds");
  });
});
//NEW
router.get("/new", middleware.isLoggedIn, function(req, res)
{
  res.render("campgrounds/new");
});
//SHOW
router.get("/:id",function(req, res){
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCamp)
  {
    if(err)
      console.log(err);
    else
      res.render("campgrounds/show", {campground: foundCamp});
  });
});

router.get("/:id/edit", middleware.isCampgroundOwner,function(req, res)
{
    Campground.findById(req.params.id, function(err,campground){
      res.render("./campgrounds/edit",{campground: campground});
    });
});

router.put("/:id", middleware.isCampgroundOwner, function(req, res)
{
  Campground.findByIdAndUpdate(req.params.id, req.body.campground, function(err,campground){
    if(err)
    {
      console.log(err);
      res.redirect("/campgrounds");
    }
    else {
      res.redirect("/campgrounds/"+req.params.id);
    }
  })
});

router.delete("/:id", middleware.isCampgroundOwner, function(req, res)
{
  Campground.findByIdAndRemove(req.params.id, function(err){
    if(err)
      res.redirect("/campgrounds");
    res.redirect("/campgrounds");
  });
});

module.exports = router;
