var Campground = require("../models/campground"),
    Comment = require("../models/comment");
var middlewareObj = {};
middlewareObj.isCommentOwner = function(req, res, next){
  if(req.isAuthenticated())
  {
    Comment.findById(req.params.comment_id, function(err, comment)
    {
      if(err)
      {
        req.flash("error","Comment Not Found");
        res.redirect("back");
      }
      if(req.user._id.equals(comment.author.id))
      {
        return next();
      }
      req.flash("error","This ain't yours fam");
      res.redirect("back");
      })
  }
  else {
    req.flash("error","Please Login");
    res.redirect("/login");
  }
};

middlewareObj.isCampgroundOwner = function(req, res, next){
  if(req.isAuthenticated())
  {
    Campground.findById(req.params.id, function(err,campground){
      if(err)
      {
        req.flash("error","Comment Not Found");
        res.redirect("back");
      }
      else {
        if(campground.author.id.equals(req.user._id))
        {
          return next();
        }
        req.flash("error","This ain't yours fam");
        res.redirect("back");
      }
    });
  }
  else {
    req.flash("error","Please Login");
    res.redirect("/login");
  }
};

middlewareObj.isLoggedIn = function(req, res, next){
  if(req.isAuthenticated())
  {
    return next();
  }
  req.flash("error","Please Login");
  res.redirect("/login");
}
module.exports = middlewareObj;
