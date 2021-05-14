//declare vars

var score = 0;
var index = 0;
var timerCount = 60;
var timeLeft = document.getElementById("timeLeft");
var startBtn = document.getElementById("start");
var questionField = document.getElementById("question");
var userChoice = document.getElementById("choice");
var answerBtn = document.getElementById("answerBtn");
var scoreText = document.getElementById("score");
var completed = false;
var currentQuestion = {};
var questionsAvail = [];



//create a startQuiz function to start quiz
function startQuiz() {
    score = 0;
    questionsAvail = [... questionsArr];
    getQuestion();
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


//create function to render questions for user
function getQuestion() {
    // get current questions object from the array

    //update your html with current question
    questionField.textContent = questionArr.question;
    //clear out old question choices

    questionsArr.forEach(function() {

    })

    }

    // attach click event listener to each choice
    userChoice.onClick() = answerClicked;

    //display questions on the page
}

//create a function for answerClicked()
function answerClicked() {
    //check if the user answered wrong question
    if (userChoice !== currentQuestion.correctAnswer) {
        document.getElementById("wrong").style.display = "block";
        score += 100;
        scoreText = score;
    } //can decrement time if answer is wrong, or display Wrong and move on
    //create if to check if time has hit 0 or time remaining
    
    else if (userChoice === currentQuestion.correctAnswer) {
        document.getElementById("correct").style.display = "block";

        getQuestion();
    }
    else if (timerCount === 0) {
        endQuiz();
    }
    

    // check to see if the answer is correct, display Correct, +points, etc
    //move on to the next question
    //if we are out of questions, run endQuiz function else go to next question
    if(currentQIndex === questions.length) {
        endQuiz();
    } else {
        getQuestion();
    }
}

//create function to end quiz

function endQuiz() {
    clearInterval(timer);


}
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

startBtn.addEventListener("click", startQuiz);