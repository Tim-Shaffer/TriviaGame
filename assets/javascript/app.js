// JavaScript and jQuery will be added here
// Variable showAnswer will hold the setInterval for time to show the Answer
var showAnswer;
var showQuestion;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

var number = 20;

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    // hide the sections that are not needed for the startup
    $("#restart").hide();
    $(".question-section").hide();
    $(".answer-section").hide();

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

function displayQuestion() {

    $(".start").hide(); 
 
    // Clear the Answer Interval before showing the next question
    clearInterval(showAnswer);
    $(".answer-section").hide();

    $(".question-section").show(); 
    // Set the Question Timer Interval to 20 seconds
    number = 20;
    clearInterval(showQuestion);
    showQuestion = setInterval(decrement, 1000);    

};

function displayAnswer() {
     
    $(".question-section").hide();   
    $(".answer-section").show();
    // Clear the Question Interval before showing the next question
    clearInterval(showQuestion);

    // Allow the Answer Information to display for 5 seconds
    showAnswer = setInterval(displayQuestion, 5000);

};

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer-display tag.
    $("#timer-display").html("<p>Time Remaining:  " + number + " Seconds</p>");

    if (number === 0) {

        clearInterval(displayQuestion);
        displayAnswer();

      };

};






// --------------------------------------------------------------------------------------
// This function enacts when the html document has been loaded and is ready
// --------------------------------------------------------------------------------------
$(document).ready(function() {

    // This should only ever happen on the start of the initial load of the game
    $('body').on('click', '#start', function () { 
          
        displayQuestion();  

    });

    // This should only ever happen on the re-start of the game
    $('body').on('click', '#restart', function () { 
         
        displayQuestion();  

    });

    $('body').on('click', '.answers', function () { 
       
        displayAnswer();

    });

    reloadGame();

});
// --------------------------------------------------------------------------------------
// end of $(document).ready(function()
// --------------------------------------------------------------------------------------

// Copied from the stopwatch to incorporate here later on
// This code will run as soon as the page loads
// window.onload = function() {
//     $(".answers").on("click", displayAnswer);
//     $("#restart").on("click", displayQuestion);
//     $("#start").on("click", displayQuestion);
//   };

