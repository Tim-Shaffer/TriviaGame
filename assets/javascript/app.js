// JavaScript and jQuery will be added here

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    // hide the sections that are not needed for the startup
    $(".question_answer").hide();
    $(".correct_wrong").hide();

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

function displayQuestion() {
    
    $(".question_answer").show(); 

}

function displayAnswer() {
     
    $(".question_answer").hide();   
    $(".correct_wrong").show();

}

// --------------------------------------------------------------------------------------
// This function enacts when the html document has been loaded and is ready
// --------------------------------------------------------------------------------------
$(document).ready(function() {

    $('body').on('click', '#start', function () { 
        
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
