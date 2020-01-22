// JavaScript and jQuery will be added here
// Variable showAnswer will hold the setInterval for time to show the Answer
var showAnswer;

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    // hide the sections that are not needed for the startup
    $("#restart").hide();
    $(".question_answer").hide();
    $(".answer-section").hide();

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

function displayQuestion() {
    
    // Clear the Answer Interval before showing the next question
    clearInterval(showAnswer);
    $(".answer-section").hide();
    $(".question_answer").show(); 

}

function displayAnswer() {
     
    $(".question_answer").hide();   
    $(".answer-section").show();
    // Allow the Answer Information to display for 5 seconds
    showAnswer = setInterval(displayQuestion, 5000);

}

// --------------------------------------------------------------------------------------
// This function enacts when the html document has been loaded and is ready
// --------------------------------------------------------------------------------------
$(document).ready(function() {

    // This should only ever happen on the start of the initial load of the game
    $('body').on('click', '#start', function () { 
        
        $(".start").hide();   
        displayQuestion();  

    });

    // This should only ever happen on the re-start of the game
    $('body').on('click', '#restart', function () { 
        
        $(".start").hide();   
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
