var express = require("express");
var app = express();

app.get("/", function(req, res)
{
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res)
{
  var animal = req.params.animal.toLowerCase();
  var noise;
  switch(animal)
  {
    case "pig":
      noise = 'Oink';
    break;
    case "cow":
      noise = 'Moo';
    break;
    case "cat":
      noise = 'Meow';
    break;
    default:
      noise = 'wat';
  }
  res.send("The " + animal + " goes " + "'" + noise + "'");
});

app.get("/repeat/:string/:num", function(req, res)
{
  var string, num;
  string = req.params.string;
  num = req.params.num;
  var sendString = "";
  for(var i = 0; i < num ; ++i)
  {
    sendString += string + " ";
  }
  res.send(sendString);
});

app.get("*", function(req,res)
{
  res.send("Sorry, page not found.... what are you doing with your life");
});


app.listen(3000, function()
{
  console.log("Server has started");
});
