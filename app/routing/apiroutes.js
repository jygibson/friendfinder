//first require the data from the friends.js file so that they can connect

var friendData = require("../data/friends")

//do the same module.exports route to call in the express router

module.exports = function(app){

    //this will show the JSON data for the different friends
app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

//using app.post we indicate what the server should do with received data

app.post("data/friends", function (request, response){
 friendData.push(request.body);
    response.json(true);
})
};