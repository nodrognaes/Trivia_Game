//declare vars

var score = 0;
var index = 0;
var timerCount = 60;
var timeLeft = document.getElementById("timeLeft");
var startBtn = document.getElementById("start");
var questionField = document.getElementById("question");
var answers = document.getElementById("answer");
var completed = false;
var currentQuestion = {};
var questionsAvail = [];

var questionsArr = [
    {
        question: "Where is the hottest spot on Earth located?",
        choices: ["Libya", "Egypt", "Equador", "Thailand"],
        correctAnswer: "Libya"
    },
    {
        question: "Which band has the most No. 2 Billboard hits—without ever hitting No. 1?",
        choices: ["Maroon 5", "The Rolling Stones", "Creedence Clearwater Revival", "No Doubt"],
        correctAnswer: "Creedence Clearwater Revival"
    },
    {
        question: "When was the first computer built?",
        choices: ["1960's", "1940's", "1980's", "1970's"],
        correctAnswer: "1940's"
    },
    {
        question: "On what day are couples statistically most likely to break up?",
        choices: ["Monday", "Sunday", "Thursday", "Wednesday"],
        correctAnswer: "Monday"
    },
    {
        question: "What is the national animal of Scotland?",
        choices: ["Sheep", "Dragon", "Cow", "Unicorn"],
        correctAnswer: "Unicorn"
    },
    {
        question: "What is the most common letter in the English language?",
        choices: ["S", "E", "A", "N"],
        correctAnswer: "E"
    },
    {
        question: "What is Cap'n Crunch's first name?",
        choices: ["Horatio", "Joseph", "Kevin", "Alberto"],
        correctAnswer: "Horatio"
    }
]

//declair vars to keep track of out quiz state (?'s index, times, time variables)

//variables to reference the DOM elements

//create a startQuiz function to start quiz
function startQuiz() {
    score = 0;
    questionsAvail = questionsArr;
    //getQuestion();
    startTimer();
}


function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timeLeft.textContent = timerCount;
        if (timerCount >= 0) {
        if (completed && timerCount > 0) {
            clearInterval(timer);
            endQuiz();
        }
        }
        if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        endQuiz();
        }
    }, 1000);
    }; 

startBtn.addEventListener("click", startQuiz);
// put timer stuff in here and run function to get quiz items

/*
//create function to render questions for user
function getQuestion(){
        // get current questions object from the array
    questionField.textContent = questionArr.question;
    //update your html with current question

    //clear out old question choices

    questionsArr.forEach(function(q) {

    }) {

    }

    var choice = questionsArr[i].choices;
    // attach click event listener to each choice
    choice.onClick() = answerClicked;

    //display questions on the page
}

//create a function for questionClicked()
function answerClicked() {
    var userChoice = document.getElementById("answer");
    userChoice.addEventListener("click", function() {
    });
    //check if the user answered wrong question
    if () {
        document.getElementById("wrong").style.display = "block";
        score += 100;
    } //can decrement time if answer is wrong, or display Wrong and move on
    //create if to check if time has hit 0 or time remaining
    
    if () {
        document.getElementById("correct").style.display = "block";
        getQuestion();
    }
    
    if (timerCount === 0) {
        return;
    }
    

    // check to see if the answer is correct, display Correct, +points, etc
    //move on to the next question
    //if we are out of questions, run endQuiz function else go to next question
    if(currentQIndex === questions.length) {}
        endQuiz();
    } else {
        getQuestion();
    }
}


function getQuestion() {

}
//create function to end quiz

function endQuiz() {


}
//clear time interval
//show end of quiz page, if you want
//show user final score

//check out methods .hide() .show() 
    // time.hide(), etc
    // .show to render

// function for highScore

// write any functions to check how many questions right and perform math or hardcoded data to display user score
function calculateScore {

}

// check to make sure user inputs user name/initials into user prompt
// save high scores to local storage
// retrieve high scores from local storage

// create a new object to store users scores for highscore page

// redirect to highscores page
// hint - window.location.href !!!! */