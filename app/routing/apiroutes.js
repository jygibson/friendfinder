//first require the data from the friends.js file so that they can connect

var friendData = require("../data/friends")
//do the same module.exports route to call in the express router

module.exports = function (app) {

    //this will show the JSON data for the different friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    //using app.post we indicate what the server should do with received data

    app.post("/api/friends", function (request, response) {
        //getting user's scores for comparison
        console.log(request.body)
        var scoresAll = [];
        //a perfect match would have a score of 0
        var bestMatchScore = 0;
        var versusArray = [];
        var sum = 0;
        var newFriendScore = request.body.scores;


        function scoreTotals() {
            for (let a = 0; a < friendData.length; a++) {
                for (let s = 0; s < newFriendScore.length; s++) {
                    var friendScoresArray = [];
                    friendScoresArray.push(friendData[a].scores)
                    var matchScore = Math.abs(
                        parseInt(friendScoresArray[s])- parseInt(newFriendScore[s])
                    );
                    console.log("new friend score " + newFriendScore[s]);
                    console.log("the friendscoresarray " + friendScoresArray[s]);
                    console.log("the match score is " + matchScore);
                   var friendScoresArray = [];

                   versusArray.push(matchScore);
                };
            };
        };

        function sumArray() {
            console.log("the versus array " + versusArray)
            for (let i = 0; i < versusArray.length; i++) {
                sum += versusArray[i]
            }
            console.log("the sum is: " + sum)
            scoresAll.push(sum);
            console.log("the scores all array " + scoresAll)
        }

        for (let i = 0; i < friendData.length; i++) {
            //another for loop within for comparing the newFriendScore
            scoreTotals();
            sumArray();
            versusArray = [];
        }

        // console.log("the scores all array " + scoresAll)

        for (let i = 0; i < scoresAll.length; i++) {
            if (scoresAll[i] <= scoresAll[bestMatchScore]) {
                bestMatchScore = i;
            }
        }

        var bestie = friendData[bestMatchScore]
        console.log("your new bestie" + bestie)

        friendData.push(request.body);
    })
};