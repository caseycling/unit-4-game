$(document).ready(function() {
 /* 
The player will be shown a random number at the start of the game.
---When page loads, generate a random number 19 - 129 for player's number*/
    
    function generateRandomNum() {
    var playerNumber = Math.floor(Math.random()*111) + 19;
    console.log(playerNumber);
    console.log(typeof(playerNumber));
    return playerNumber;
    }

    var randomNumber = generateRandomNum();

//---Variable to hold player's score
    var playerScore = 0;

//---Variable to count wins
    var winCounter = 0;

//---Variable to count losses
    var lossCounter = 0;

//------Make this appear in the html
    $("#number").html(randomNumber);
    $("#score").html(playerScore);
    $("#losses").html(lossCounter);
    $("#wins").html(winCounter);

//---When page loads, generate a random number 1 - 12 for crystal value
//---Use a function to call the randomly generated number to the value of each crystal button
    function generateCrystalNum() {
        var crystalNumber = Math.floor(Math.random()*12) + 1;
        console.log(crystalNumber);
        console.log(typeof(crystalNumber))
        return crystalNumber;
    }

//------Assign this random number to each of the four crystals
    $("#crystal1").val(generateCrystalNum());
    $("#crystal2").val(generateCrystalNum());
    $("#crystal3").val(generateCrystalNum());
    $("#crystal4").val(generateCrystalNum());
    console.log(typeof($("#crystal1").val()));
    console.log($("#crystal1").val());


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
            $("#score").html(playerScore = 0);
            $("#wins").html(winCounter += 1);
            $("#number").html(generateRandomNumber());
            alert("You win!");
            console.log(winCounter);
            $("#crystal1").val(generateCrystalNum());
            $("#crystal2").val(generateCrystalNum());
            $("#crystal3").val(generateCrystalNum());
            $("#crystal4").val(generateCrystalNum());

//Else, if the total score is greater than the random number, they lose
//The loss counter increases by one, the player score gets set back to zero
//A new random number is generated
//The crystals are given new random values

        } else if(playerScore > randomNumber) {
            $("#score").html(playerScore = 0);
            $("#losses").html(lossCounter += 1);
            $("#number").html(generateRandomNum());
            alert("You lose!");
            console.log(lossCounter);
            $("#crystal1").val(generateCrystalNum());
            $("#crystal2").val(generateCrystalNum());
            $("#crystal3").val(generateCrystalNum());
            $("#crystal4").val(generateCrystalNum());
        }
    }
})