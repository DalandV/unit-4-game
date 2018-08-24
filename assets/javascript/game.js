$(document).ready(function () {

    // Variables
    // ===========================

    //ARRAY OF OBJECTS

    var randomNumber = getRandomInt(19, 121);

    var wins = 0;

    var losses = 0;

    var totalScore = [0];

    var gemNumbers = [];

    // var gemClicked = false

    // var whateverGemWasClicked;

    // var redGemClicked = false
    // var blueGemClicked = false
    // var yellowGemClicked = false
    // var greenGemClicked = false

    // Functions
    // ===========================

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function getSum(total, num) {
        return total + num;
    }
    function initizializeGame() {
        randomNumber = getRandomInt(19, 121);
        wins = 0;
        losses = 0;
        gemNumbers = [];
        // generate gem numbers and store them in gemNumbers Array
        $("img").each(function () {
            gemNumbers.push(getRandomInt(1, 13));
        });


        totalScore = [0];
        $("#third-div").html(randomNumber);
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#seventh-div").html(totalScore);
    }
    function resetNumAndScore() {
        randomNumber = getRandomInt(19, 121);
        gemNumbers = [];
        // generate gem numbers and store them in gemNumbers Array
        $("img").each(function () {
            gemNumbers.push(getRandomInt(1, 13));
        });
        totalScore = [0];
        $("#third-div").html(randomNumber);
        $("#wins").html(wins);
        $("#losses").html(losses);
    }

    // push numbers in gemNumbers Array to totalScore Array
    $("#red-gem").on("click", function () {
        totalScore.push(gemNumbers[0]);
        console.log(totalScore)


        if (totalScore.reduce(getSum) === randomNumber) {
            wins++
            resetNumAndScore()
        }
        else if (totalScore.reduce(getSum) > randomNumber) {
            losses++
            resetNumAndScore()
        };
        $("#seventh-div").html(totalScore.reduce(getSum));
    });

    console.log(totalScore)
    console.log(gemNumbers)

    //DOM Manipulation
    // ===========================

    initizializeGame();
});

