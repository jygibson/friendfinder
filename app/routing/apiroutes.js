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
       //saving the incoming friend data body
       const newFriend = request.body;
       //create a variable for the best match score and start it high. As the scores are calculated it will be replaced
       let bestMatchScore = 100;
       //the next variable is best match index, which is the array index of the best match
        let bestMatchIndex = 0;

        //the Array.map() function  creates a new array with the results of calling the same function for every index in the array. we will use 
        //it to iterate through all
        friendData.map((friend, index) => {
            //then use  Array.reduce() for the calculations
            const score = friend.scores.reduce((accumulator, currentValue, i) => {
                return accumulator + Math.abs(parseInt(currentValue)- parseInt(newFriend.scores[i]));
            }, 0)

            //console.log for the scoring
            console.log(`Calculated score for ${friendData[index].friendName} and ${newFriend.friendName}: ${score}`);

            //use result comparison to find best score

            if (score < bestMatchScore){
                bestMatchIndex = index;
                bestMatchScore = score;
            }
        });

         // A few more console logs to see the action after the loop.
         console.log(`BEST MATCH: ${friendData[bestMatchIndex].friendName}`)
         console.log('INDEX in friendData ARRAY: ', bestMatchIndex);
 
         // Return friend with the lowest score back to the client who issued request.
         response.json(friendData[bestMatchIndex]);

        friendData.push(request.body);
    })
};