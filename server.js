//call in the express node module 
var express = require("express");

//initialize the express npm to the variable app
var app = express();

//set the port to whatever heroku wants OR 3000
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//require the route files so that the server knows how to respond to requests
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

//"start" the server with the listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });