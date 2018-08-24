$(document).ready(function () {

    // Variables
    // ===========================

    var randomNumber = getRandomInt(19, 121);

    var wins = 0;

    var losses = 0;

    var totalScore = [0];

    //stores the numbers that each crystal is worth
    var gemNumbers = [];

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
        totalScore = [0];
        // generate gem numbers and store them in gemNumbers Array
        $(".gem").each(function () {
            gemNumbers.push(getRandomInt(1, 13));
        });
        $("#third-div").html(randomNumber);
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#seventh-div").html(totalScore);
    }
    function resetNumAndScore() {
        randomNumber = getRandomInt(19, 121);
        gemNumbers = [];
        // generate gem numbers and store them in gemNumbers Array
        $(".gem").each(function () {
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
    $("#blue-gem").on("click", function () {
        totalScore.push(gemNumbers[1]);
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
    $("#yellow-gem").on("click", function () {
        totalScore.push(gemNumbers[2]);
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
    $("#green-gem").on("click", function () {
        totalScore.push(gemNumbers[3]);
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

