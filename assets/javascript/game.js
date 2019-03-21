$(document).ready(function() {
 /* 
The player will be shown a random number at the start of the game.
---When page loads, generate a random number 19 - 129 for player's number*/
    
    // function generateRandomNum() {
    // var playerNumber = Math.floor(Math.random()*111) + 19;
    // console.log(playerNumber);
    // console.log(typeof(playerNumber));

    // return playerNumber;
    // }

//---Variable that gets a random number between 19 and 129
    var randomNumber = Math.floor(Math.random()*111) + 19;
    console.log(randomNumber);

//---Variable to hold player's score
    var playerScore = 0;
    console.log(playerScore);
//---Variable to count wins
    var winCounter = 0;

//---Variable to count losses
    var lossCounter = 0;

//------Set these variables to the html
    $("#number").html(randomNumber);
    $("#score").html(playerScore);
    $("#losses").html(lossCounter);
    $("#wins").html(winCounter);

//---Use a function that generates a number between 1 and 12 for the crystal button
    function generateCrystalNum() {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        console.log(crystalNumber);
        console.log(typeof(crystalNumber))
        return crystalNumber;
    }

//---Create a function to input the crystals random value (generated from the function above) to the crystal button
//---This will save having to brute-force in the values in scoreEvaluation()
    function inputCrystalVal() {
        $("#crystal1").val(generateCrystalNum());
        $("#crystal2").val(generateCrystalNum());
        $("#crystal3").val(generateCrystalNum());
        $("#crystal4").val(generateCrystalNum());
        console.log(typeof($("#crystal1").val()));
        console.log($("#crystal1").val());
    }

//---Call the function so the crystals have the random values
    inputCrystalVal();

//When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
//---On clicking the crystal, the number assigned to it will be added to the score counter   
    $("#crystal1").on("click", function() { 
        playerScore += parseInt($(this).val());
        alert($(this).val());
        $("#score").html(playerScore);
        return scoreEvaluation();
    })

    $("#crystal2").on("click", function() { 
        playerScore += parseInt($(this).val());
        alert($(this).val());
        $("#score").html(playerScore);
        return scoreEvaluation(); 
    })

    $("#crystal3").on("click", function() { 
        playerScore += parseInt($(this).val());
        alert($(this).val());
        $("#score").html(playerScore);
        return scoreEvaluation();
    })

    $("#crystal4").on("click", function() { 
        playerScore += parseInt($(this).val());
        console.log(playerScore)
        alert($(this).val());
        $("#score").html(playerScore);
        return scoreEvaluation(); 
    })


//The player wins if their total score matches the random number from the beginning of the game.
//The win counter increases by one, the player score gets set back to zero
//A new random number is generated
//The crystals are given new random values

    function scoreEvaluation() {
        if(randomNumber === playerScore) {
            playerScore = 0;
            $("#score").html(playerScore);
            $("#wins").html(winCounter += 1);
            var newRandomNumber = Math.floor(Math.random()*111) + 19;
            randomNumber = newRandomNumber;
            $("#number").html(randomNumber);
            alert("You win!");
            console.log(winCounter);
            inputCrystalVal();

//Else, if the total score is greater than the random number, they lose
//The loss counter increases by one, the player score gets set back to zero
//A new random number is generated
//The crystals are given new random values

        } else if(playerScore > randomNumber) {
            playerScore = 0;
            $("#score").html(playerScore);
            $("#losses").html(lossCounter += 1);
            var newRandomNumber = Math.floor(Math.random()*111) + 19;
            randomNumber = newRandomNumber;
            $("#number").html(randomNumber);
            alert("You lose!");
            console.log(lossCounter);
            inputCrystalVal();
        }
        
    }   
})