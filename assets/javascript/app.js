// **** Questions ****
const questionsAvialable = [
{
    Question: 'Which "Toy Story" character was voiced by Don Rickles?',
    Answer: 'Mr. Potatoe Head',
    WrongAnswers: ['Woody', 'Rex', 'Buzz Lightyear' , 'Hamm'],
    AnswerImage: "./assets/images/mr-potato-head.jpg"
},
{
    Question: 'In the 1971 film "Willy Wonka & the Chocolate Factory", who played Willy Wonka?',
    Answer: 'Gene Wilder',
    WrongAnswers: ['Johnny Depp', 'Jack Albertson', 'Richard Pryor', 'David Kelly'],
    AnswerImage: "./assets/images/willy-wonka-wilder.jpg"
},
{
    Question: 'How many rooms are there, not including the hallways and the set of stairs, in the board game "Clue"?',
    Answer: '9',
    WrongAnswers: ['6', '8', '10' , '7'],
    AnswerImage: "./assets/images/clue.jpg"
},
{
    Question: 'How many points is the "Z" tile worth in Scrabble?',
    Answer: '10',
    WrongAnswers: ['9', '8', '7' , '2'],
    AnswerImage: "./assets/images/z-tile.jpg"
},
{
    Question: 'What is the fastest land animal?',
    Answer: 'Cheetah',
    WrongAnswers: ['Horse', 'Jaguar', 'Ostrich' , 'Hyena'],
    AnswerImage: "./assets/images/Cheetah.jpg"
},
{
    Question: 'On the show "Mike and Molly", how did Mike and Molly meet?',
    Answer: 'at an Overeaters Anonymous meeting',
    WrongAnswers: ['he responds to an emergency call at her home', 'he arrests her mother', 'he arrests her sister' , 'she teaches his son'],
    AnswerImage: "./assets/images/mike-n-molly.jpg"
},
{
    Question: 'Who wrote and recorded the theme song for the "Big Bang Theory"?',
    Answer: 'Barenaked Ladies',
    WrongAnswers: ['Taylor Swift', 'R.E.M.', 'Smashing Pumpkins' , 'Three Dog Night'],
    AnswerImage: "./assets/images/Big-Bang-Theme.jpg"
},
{
    Question: ' Which American president appeared on the show “Laugh-in”?',
    Answer: 'Richard Nixon',
    WrongAnswers: ['Ronald Reagan', 'Jimmy Carter', 'Bill Clinton' , 'George H. W. Bush'],
    AnswerImage: "./assets/images/nixon-laugh-in.jpg"
},
{
    Question: 'Who wrote the Sinead O`Connor hit "Nothing Compares 2 U"?',
    Answer: 'Prince',
    WrongAnswers: ['Sinead O`Connor', 'Madonna', 'Debbie Gibson' , 'Tiffany'],
    AnswerImage: "./assets/images/prince.jpg"
},
{
    Question: 'Daniel Craig made his debut as James Bond in 2006 in what movie?',
    Answer: 'Casino Royale',
    WrongAnswers: ['Quantum of Solace', 'Skyfall', 'Spectre' , 'No Time to Die'],
    AnswerImage: "./assets/images/casino-royale.jpg"
},
{
    Question: 'The character "Jar Jar Binks" made his first appearance in which "Star Wars" movie?',
    Answer: 'Episode 1 – The Phantom Menace',
    WrongAnswers: ['Episode 2 – Attack of the Clones', 'Episode 5 - The Empire Strikes Back', 'Episode 9 - The Rise of Skywalker', 'Episode 3 - Revenge of the Sith'],
    AnswerImage: "./assets/images/Jar-Jar-Binks.jpg"
},
{
    Question: "What was the name of the Clampetts' banker in 'The Beverly Hillbillies'?",
    Answer: 'Milburn Drysdale',
    WrongAnswers: ['Jethro Bodine', 'Daisy Moses', 'Margaret Drysdale' , 'Jane Hathaway'],
    AnswerImage: "./assets/images/bev-hillbillies.jpg"
},
{
    Question: "What was Ted Danson's profession when he guest starred on the sitcom 'Taxi'?",
    Answer: 'Hairdresser',
    WrongAnswers: ['Doctor', 'Cab Driver', 'Electrician' , 'Plumber'],
    AnswerImage: "./assets/images/taxi-ted.jpg"
},
{
    Question: 'On the show "The Simpsons", Marge Simpson has the same maiden name as which former First Lady?',
    Answer: 'Jacqueline "Bouvier" Kennedy',
    WrongAnswers: ['Hillary "Rodham" Clinton', 'Laura "Welch" Bush', 'Barbara "Pierce" Bush' , 'Nancy "Davis" Reagan'],
    AnswerImage: "./assets/images/jacqui-bouvier.jpg"
},
{
    Question: "What was the name of Arnold's fish on 'Different Strokes'?",
    Answer: 'Abraham',
    WrongAnswers: ['Willis', 'Drummond', 'Adelaide' , 'Charlene DuPrey'],
    AnswerImage: "./assets/images/abraham.jpg"
},
{
    Question: "On the sitcom Three's Company, what is the name 'Chrissy' short for?",
    Answer: 'Christmas',
    WrongAnswers: ['Christine', 'Christina', 'Christabelle' , 'Chris'],
    AnswerImage: "./assets/images/ThreesCompany.jpg"
},
{
    Question: "What was Roscoe's dogs name on the Dukes of Hazzard?",
    Answer: 'Flash',
    WrongAnswers: ['Fido', 'Fred', 'Felix' , 'Hank'],
    AnswerImage: "./assets/images/flash.jpg"
},
{
    Question: "In the TV show 'Family Ties' who was Alex P. Keaton's idol?",
    Answer: 'Richard Nixon',
    WrongAnswers: ['Ronald Reagan', 'Jimmy Carter', 'Bill Clinton' , 'George H. W. Bush'],
    AnswerImage: "./assets/images/alex-p-keaton.jpg"
},
{
    Question: "On the TV show ALF, what was ALF's real name?",
    Answer: 'Gordon Shumway',
    WrongAnswers: ['George Clooney', 'Greg Kinnear', 'Gabriel Iglesias' , 'Gavin Rossdale'],
    AnswerImage: "./assets/images/Alf.jpg"
},
{
    Question: "What was the name of the bar/restaurant on the TV show Three's Company?",
    Answer: 'Regal Beagle',
    WrongAnswers: ['Royal Dog', 'Melvilles', 'Boars Nest' , 'The Hard Rock Cafe'],
    AnswerImage: "./assets/images/regal-beagle.jpeg"
},
{
    Question: "Who are you likely to meet on Philadelphia's Elfreth's Alley?",
    Answer: 'Betsy Ross',
    WrongAnswers: ['Kevin Bacon', 'Andy Reid', 'Brad Lidge' , 'Elmo'],
    AnswerImage: "./assets/images/Betsy-Ross-House.jpg"
},
{
    Question: 'Where in Philadelphia is Benjamin Franklin buried?',
    Answer: 'Christ Church',
    WrongAnswers: ['Independence Hall', 'The Art Museum', 'City Hall' , 'University of Pennsylvania'],
    AnswerImage: "./assets/images/here-lies-ben-franklin.jpg"
},
{
    Question: 'What is exhibited at the Mutter Museum?',
    Answer: 'Medical Oddities',
    WrongAnswers: ['Insects', 'Sheep', 'Cattle' , 'Dogs'],
    AnswerImage: "./assets/images/mutter-museum.jpg"
},
{
    Question: 'How many championships do the 4 major sprts teams in Philly have?',
    Answer: '8',
    WrongAnswers: ['16', '6', '10' , '9'],
    AnswerImage: "./assets/images/sports-trophies.jpg"
},
{
    Question: 'What year did all the major Philly sports teams make their respective championships?',
    Answer: '1980',
    WrongAnswers: ['2000', '1983', '1974' , '1960'],
    AnswerImage: "./assets/images/4-sports.jpg"
},
{
    Question: 'Who scored 100 points in a single game as a 76er?',
    Answer: 'Wilt Chamberlain',
    WrongAnswers: ['Moses Malone', 'Allen Iverson', 'Kobe Bryant' , 'Julius Erving'],
    AnswerImage: "./assets/images/wilt.png"
},
{
    Question: 'What was the name of the Curse that the Phillies ended in 2008?',
    Answer: ' Curse of William Penn',
    WrongAnswers: ['Curse of the Bambino', 'Curse of 1983', 'Curse of Philly' , 'The Mummers Curse'],
    AnswerImage: "./assets/images/curse_of_william_penn.jpg"
},
{
    Question: 'Who was the only Flyers player to lose a Stanley Cup and win series MVP?',
    Answer: 'Ron Hextall',
    WrongAnswers: ['Wayne Gretzky', 'Bobby Clarke', 'Eric Lindross' , 'Simon Gagne'],
    AnswerImage: "./assets/images/hextall-smythe.jpg"
},
{
    Question: 'On the TV show "Everybody Loves Raymond", what type of reenactment does Frank participate in?',
    Answer: 'Civil War Reenactment',
    WrongAnswers: ['World War II Reenactment', 'Korean War Reenactment', 'Renaissance Reenactment' , 'Reenactment of The Last Supper'],
    AnswerImage: "./assets/images/frank-civil-war.jpg"
},
{
    Question: 'On the TV show "Everybody Loves Raymond", what state did Marie and Frank once forget Robert in?',
    Answer: 'New Mexico',
    WrongAnswers: ['Oklahoma', 'Utah', 'Florida' , 'Nevada'],
    AnswerImage: "./assets/images/traffic-cop-timmy.jpg"
}
];
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// array to be used to hold the randomly selected questionsAvailable indexes
var questionToAsk = [];

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
var questionsLoaded = false;

var number = 20;
var message = '';
var newQuestion = 0;
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to initially load the game when start button is clicked or reload when the restart is clicked
// --------------------------------------------------------------------------------------
function reloadGame() {
    
    // hide the sections that are not needed for the start of the game
    $('#restart').hide();
    $('.question-section').hide();
    $('.answer-section').hide();
    $('.result-section').hide();

    // reset counters
    questionCounter = 0;
    correctAnswer = 0;
    incorrectAnswer = 0;
    timeOut = 0;

    // reset boolean
    isAnswerRight =false;
    questionsLoaded = false;

    //set the Question To Ask Array to be used later
    loadQuestionArray();

};
// --------------------------------------------------------------------------------------
// end of the reloadGame() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to randomly set an array of indexes which pick the questions to be used
// --------------------------------------------------------------------------------------
function loadQuestionArray() {
    questionsLoaded = false;
    // reset the array to empty
    questionToAsk = [];

    var newValue = 0

    // randomly set the values for the questions by updating the array for 10 questions
    for (i=0; i < 10; i++ ) {
        // calculate a number between 0 and 29 to represent the index of the question to use
        newValue = Math.floor(Math.random() * 30);  
        // make sure that each value is unique to the array
        if (questionToAsk.indexOf(newValue) === -1 ) {

            questionToAsk.push(newValue);

        }    
        // number was already found in the array so reset the iterator back 1 so the loop will try again
        else {
            i--;
        };
        
    };

    questionsLoaded = true;
};
// --------------------------------------------------------------------------------------
// end of the loadQuestionArray() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to display the question and the possible answers
// --------------------------------------------------------------------------------------
function displayQuestion() {

    // can only display a question if questions have been loaded
    if (questionsLoaded) {

        //  the questioncounter will be used to access the array of indexes to then grab that index for the question from the available ones
        newQuestion = questionToAsk[questionCounter];

        // reset the isAnswerRight 
        isAnswerRight = false;

        // hide the start section if still being shown
        $('.start').hide(); 
    
        // Clear the Answer Interval and hide the answer section before showing the question
        clearInterval(showAnswer);
        $('#answer').empty();
        $('.answer-section').hide();

        // Set the Question Timer Interval to 20 seconds
        number = 20;

        //  GET the Question and Build the Section 
        $('#question').text(questionsAvialable[newQuestion].Question);
        
        // randomly select which answer will be the correct answer 
        var rightAnswer = Math.floor(Math.random() * 4);  // creates a range from 0 to 3 to correspond to the answer ids
        // build the right answer and add the 'right' class to designate it as the right answer 
        $('#answer' + rightAnswer).text(questionsAvialable[newQuestion].Answer).addClass('right');

        // populate the remaining answers with the incorrect answers and make sure they do not have the 'right' class designation
        for (i=0; i < questionsAvialable[newQuestion].WrongAnswers.length; i++) {
            if (i != rightAnswer) {
                $('#answer' + i).text(questionsAvialable[newQuestion].WrongAnswers[i]).removeClass('right');
            }
        };
        
        //  Show the number in the #timer-display tag.
        $('#timer-display').text('Time Remaining:  ' + number + ' Seconds');

        // show the question
        questionCounter ++; 
        $('.question-section').show();
        
        // run the timer countdown process
        showQuestion = setInterval(decrement, 1000);
    }  

};
// --------------------------------------------------------------------------------------
// end of the displayQuestion() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to display the correct answer
// --------------------------------------------------------------------------------------
function displayAnswer() {
    // displaying the answer so hide the question 
    $('.question-section').hide();   

    // clear the Question Interval before showing the next question
    clearInterval(showQuestion);

    // set the answer information into the answer section and show it
    $('#answer').text(message);

    // When the wrong answer was selected or it timed out,  add in the actual answer information before showing the section
    if (!isAnswerRight) {
        $('#answer').append('<p>The correct answer was:  ' + questionsAvialable[newQuestion].Answer + '.</p>');
    };

    // show the correct answer image 
    $("#answer").append('<br><img src="' + questionsAvialable[newQuestion].AnswerImage + '" class="answer-image">');

    // show the full answer section
    $('.answer-section').show();

    //There will be 10 questions 
    if (questionCounter === 10) {
        // Allow the Answer Information to display for 3 seconds  
        showAnswer = setInterval(displayEndOfGame, 3000);
    }
    // show next question
    else {
        // Allow the Answer Information to display for 3 seconds  
        showAnswer = setInterval(displayQuestion, 3000);
    };

};
// --------------------------------------------------------------------------------------
// end of the displayAnswer() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
//  function to verify whether the correct answer was chosen or not and add a message to display the result
// --------------------------------------------------------------------------------------
function checkAnswer() {
    
     // check to see if the function was enacted because the timer expired
    if (number === 0) {
        message = 'Time is Up!!';
        timeOut++;
    } 
    // an answer was picked before the time expired
    else {
        // validate the answer that was clicked was the correct answer 
        if (isAnswerRight) {    
            message = 'Correct!';
            correctAnswer++;    
        } 
        // an incorrect answer was selected
        else {     
            message = 'Nope!';
            incorrectAnswer++; 
        };
    };

    // display the answer  
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
    $('#timer-display').text('Time Remaining:  ' + number + ' Seconds');

    // when time has run out, call the check answer function for processing the answer   
    if (number === 0) {
        checkAnswer();
    };

};
// --------------------------------------------------------------------------------------
// end of the decrement() function
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// function to display the end of the game statistics and allow for a restart
// --------------------------------------------------------------------------------------
function displayEndOfGame() {
    // clear the interval after displaying the answer
    clearInterval(showAnswer);

    // hide the answer section 
    $('.answer-section').hide();
    
    // make sure the result section is empty before reloading with current results
    $('#result-section').empty();
    
    // display the results - 
    $('#result-section').append('<p>Game Over.  Here are your results: </p>');
    $('#result-section').append('<p>Correct Answers:  ' + correctAnswer + '</p>');
    $('#result-section').append('<p>Incorrect Answers:  ' + incorrectAnswer + '</p>');
    $('#result-section').append('<p>Unanswered:  ' + timeOut + '</p>');
    $('.result-section').show();

    // show the start section with just the restart button visible
    $('#start').hide();
    $('#restart').show();
    $('.start').show(); 

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

        if ($(this).hasClass('right')) {
            isAnswerRight = true;
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