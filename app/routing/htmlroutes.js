//enter the path dependency (built in to node) to make sure we can call the diretories. 
var path = require("path");

//call in the app variable from server.js so you can use it in this function here
module.exports = function(app){

//if url has a "/" display home.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

// if url has /survey, display survey.html
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
//if url doesn't have a matching route, show the home page. 
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};