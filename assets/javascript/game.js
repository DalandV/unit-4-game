$(document).ready(function() {
  // Variables
  // ===========================

  let randomNumber = getRandomInt(19, 121);

  let wins = 0;

  let losses = 0;

  let totalScore = [0];

  //stores the numbers that each gem is worth
  let gemNumbers = [];

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
    $("#third-div").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);
    $("#seventh-div").html(totalScore);

    // generate gem numbers and store them in gemNumbers Array
    $(".gem").each(function() {
      gemNumbers.push(getRandomInt(1, 13));
    });
  }
  function resetNumAndScore() {
    randomNumber = getRandomInt(19, 121);
    gemNumbers = [];
    totalScore = [0];
    $("#third-div").html(randomNumber);
    $("#wins").html(wins);
    $("#losses").html(losses);

    // generates gem numbers and stores them in gemNumbers Array
    $(".gem").each(function() {
      gemNumbers.push(getRandomInt(1, 13));
    });
  }

  // pushes numbers in gemNumbers Array to totalScore Array when gems are clicked
  $("#red-gem").on("click", function() {
    totalScore.push(gemNumbers[0]);
    console.log(totalScore);

    if (totalScore.reduce(getSum) === randomNumber) {
      wins++;
      resetNumAndScore();
    } else if (totalScore.reduce(getSum) > randomNumber) {
      losses++;
      resetNumAndScore();
    }
    $("#seventh-div").html(totalScore.reduce(getSum));
  });

  $("#blue-gem").on("click", function() {
    totalScore.push(gemNumbers[1]);
    console.log(totalScore);

    if (totalScore.reduce(getSum) === randomNumber) {
      wins++;
      resetNumAndScore();
    } else if (totalScore.reduce(getSum) > randomNumber) {
      losses++;
      resetNumAndScore();
    }
    $("#seventh-div").html(totalScore.reduce(getSum));
  });

  $("#yellow-gem").on("click", function() {
    totalScore.push(gemNumbers[2]);
    console.log(totalScore);

    if (totalScore.reduce(getSum) === randomNumber) {
      wins++;
      resetNumAndScore();
    } else if (totalScore.reduce(getSum) > randomNumber) {
      losses++;
      resetNumAndScore();
    }
    $("#seventh-div").html(totalScore.reduce(getSum));
  });

  $("#green-gem").on("click", function() {
    totalScore.push(gemNumbers[3]);
    console.log(totalScore);

    if (totalScore.reduce(getSum) === randomNumber) {
      wins++;
      resetNumAndScore();
    } else if (totalScore.reduce(getSum) > randomNumber) {
      losses++;
      resetNumAndScore();
    }
    $("#seventh-div").html(totalScore.reduce(getSum));
  });

  console.log(totalScore);
  console.log(gemNumbers);

  initizializeGame();
});
