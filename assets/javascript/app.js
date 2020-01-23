// JavaScript and jQuery will be added here
// Variable showAnswer will hold the setInterval for time to show the Answer
var showAnswer;
var showQuestion;
//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

var answer = "";
var timeOut = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;

var isAnswerRight = false; 

var questionCounter = 0;

var number = 20;

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    // hide the sections that are not needed for the startup
    $("#restart").hide();
    $(".question-section").hide();
    $(".answer-section").hide();
    questionCounter = 0;
    isAnswerRight =false;
    correctAnswer = 0;
    incorrectAnswer = 0;
    timeOut = 0;

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

function displayQuestion() {

    $(".start").hide(); 
 
    // Clear the Answer Interval before showing the next question
    clearInterval(showAnswer);
    $(".answer-section").hide();

    // Set the Question Timer Interval to 20 seconds
    // clearInterval(showQuestion);
    number = 20;
    
    //  Show the number in the #timer-display tag.
    $("#timer-display").text('Time Remaining:  ' + number + ' Seconds');
    $(".question-section").show(); 
    
    showQuestion = setInterval(decrement, 1000);    

};

function displayAnswer() {
     
    $(".question-section").hide();   

    // Clear the Question Interval before showing the next question
    clearInterval(showQuestion);

    $("#answer").text(answer);
    $(".answer-section").show();

    //There will be 8 questions
    if (questionCounter === 8) {

        // Allow the Answer Information to display for 5 seconds
        showAnswer = setInterval(displayEndOfGame, 1000);

    }
    // show next question
    else {

        // Allow the Answer Information to display for 5 seconds
        showAnswer = setInterval(displayQuestion, 1000);
    };

};

function checkAnswer() {
    
     // check to see if the function was enacted because the timer expired
     // figure out the message to display
    if (number === 0) {
        answer = "Time is Up!!";
        timeOut++;
    } 
    else {
        // validate the answer that was clicked vs the correct answer
        // randomize the test 
        var checkTest = Math.floor(Math.random() * 2);
        if (checkTest === 1) {
            isAnswerRight = true;
        };

        if (isAnswerRight) {
            answer = "Correct!";
            correctAnswer++;
            // reset the isAnswerRight variable
            isAnswerRight = false;
        } else {
            answer = "Nope!";
            incorrectAnswer++;
        };
    };

    questionCounter++;
    displayAnswer();
    
}

//  The decrement function.
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer-display tag.
    $("#timer-display").text('Time Remaining:  ' + number + ' Seconds');

    if (number === 0) {

        checkAnswer();

      };

};


function displayEndOfGame() {
    alert("GAME OVER. Replace with a message that will allow user to select Restart");
    clearInterval(showAnswer);
    console.log(correctAnswer);
    console.log(incorrectAnswer);
    console.log(timeOut);
    $(".answer-section").hide();
    $("#start").hide();
    $("#restart").show();
    $(".start").show(); 

}



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
         
        reloadGame();
        displayQuestion();  

    });

    $('body').on('click', '.answers', function () { 
       
        checkAnswer();

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

