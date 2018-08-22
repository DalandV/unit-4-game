// function getRandomInt(19, 121) {
    
// }

$( document ).ready(function() {

    var totalScore = 0

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }

    $("#third-div").html(getRandomInt(19, 121));
    $("#seventh-div").html(totalScore);

});

