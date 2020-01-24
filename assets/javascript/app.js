// **** Questions *****
var questionsToUse = ["question1"];
var choice = {
    Question: "What Movie Tells The Story of A Boy And His Alien?",
    CorrectAnswer: "E.T",
    IncorrectAnswer: ["Bicentennial Man", "Dr Alien", "The Color Purple" , "Grease"]
}
// variables to hold SetIntervals
var showAnswer;
var showQuestion;

// counters
var timeOut = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var questionCounter = 0;

// booleans
var isAnswerRight = false; 

var number = 20;
var message = "";

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    
    // hide the sections that are not needed for the start of the game
    $("#restart").hide();
    $(".question-section").hide();
    $(".answer-section").hide();
    $(".result-section").hide();

    // reset counters
    questionCounter = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    timeOut = 0;

    // reset boolean
    isAnswerRight =false;

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
function displayQuestion() {

    // hide the start section if still being shown
    $(".start").hide(); 
 
    // Clear the Answer Interval and hide the answer section before showing the next question
    clearInterval(showAnswer);
    $(".answer-section").hide();

    // Set the Question Timer Interval to 20 seconds
    number = 20;

    // ***** GET the Question and Build the Section ****
    $("#question").text(choice.Question);
    // **** randomly select which answer will be the correct answer *****
    var rightAnswer = Math.floor(Math.random() * 4);  // creates a range from 0 to 3
    $("#answer" + rightAnswer).text(choice.CorrectAnswer).addClass("right");
    for (i=0; i < choice.IncorrectAnswer.length; i++) {
        if (i != rightAnswer) {
            $("#answer" + i).text(choice.IncorrectAnswer[i]);
        }
    };
    // **** 
    
    //  Show the number in the #timer-display tag.
    $("#timer-display").text('Time Remaining:  ' + number + ' Seconds');

    // show the question
    $(".question-section").show();
    questionCounter ++; 
    
    // run the timer countdown process
    showQuestion = setInterval(decrement, 1000);    

};
// --------------------------------------------------------------------------------------
// end of the displayQuestion() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
function displayAnswer() {

    // displaying the answer so hide the question 
    $(".question-section").hide();   

    // clear the Question Interval before showing the next question
    clearInterval(showQuestion);

    // set the answer information into the answer section and show it
    $("#answer").text(message);
    // **** add in the actual answer information before showing the section! ****
    $(".answer-section").show();

    //There will be 10 questions
    if (questionCounter === 10) {

        // Allow the Answer Information to display for 5 seconds  ****
        showAnswer = setInterval(displayEndOfGame, 1000);

    }
    // show next question
    else {

        // Allow the Answer Information to display for 5 seconds  ****
        showAnswer = setInterval(displayQuestion, 1000);
    };

};
// --------------------------------------------------------------------------------------
// end of the displayAnswer() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
function checkAnswer() {
    
     // check to see if the function was enacted because the timer expired
    if (number === 0) {
        message = "Time is Up!!";
        timeOut++;
    } 
    // an answer was picked before the time expired
    else {
        // validate the answer that was clicked was the correct answer 
        if (isAnswerRight) {
            
            message = "Correct!";
            correctAnswer++;
            
        } 
        // an incorrect answer was selected
        else {
            
            message = "Nope!";
            incorrectAnswer++;
        
        };

    };

    // display the answer  ****
    displayAnswer();
    
};
// --------------------------------------------------------------------------------------
// end of the checkAnswer() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to decrement the timer and display - copied from in class activities (interval)
// --------------------------------------------------------------------------------------
function decrement() {

    //  Decrease number by one.
    number--;

    //  Show the number in the #timer-display tag.
    $("#timer-display").text('Time Remaining:  ' + number + ' Seconds');

    // when time has run out, call the check answer function for processing the answer
    if (number === 0) {

        checkAnswer();

    };

};
// --------------------------------------------------------------------------------------
// end of the decrement() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------
function displayEndOfGame() {

    // clear the interval after displaying the answer
    clearInterval(showAnswer);

    // hide the answer section 
    $(".answer-section").hide();
    
    // make sure the result section is empty before reloading with current results
    $("#result-section").empty();
    
    // display the results - 
    $("#result-section").append('<p>Game Over.  Here are your results: </p>');
    $("#result-section").append('<p>Correct Answers:  ' + correctAnswer + '</p>');
    $("#result-section").append('<p>Incorrect Answers:  ' + incorrectAnswer + '</p>');
    $("#result-section").append('<p>Unanswered:  ' + timeOut + '</p>');
    $(".result-section").show();


    // show the start section with just the restart button visible
    $("#start").hide();
    $("#restart").show();
    $(".start").show(); 

};
// --------------------------------------------------------------------------------------
// end of the displayEndOfGame() function
// --------------------------------------------------------------------------------------

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

    // the click of an answer button
    $('body').on('click', '.answers', function () { 

        var buttonID;

        if ($(this).hasClass("right")) {
            isAnswerRight = true;
            // ****  remove the class for testing **** 
            buttonID = $(this).attr('id');
            $("#" + buttonID).removeClass("right");
            // **** Need to remove the "right" class upon timeout and incorrect answers
        }
        else {
            isAnswerRight = false;
        };

        checkAnswer();

    });

    // initialize the game play
    reloadGame();

});
// --------------------------------------------------------------------------------------
// end of $(document).ready(function()
// --------------------------------------------------------------------------------------


