// variables to keep track of quiz state
var currentQuestionIndex = 0;
var time = 60;
var timerId;

// variables to reference DOM elements
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById("questions");
var questionTextEl = document.getElementById("question-text");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var endScreenEl = document.getElementById("end-screen");

function startQuiz() {
  // HIDE START SCREEN SECTION
  startScreenEl.setAttribute("class", "hide");

  // UNHIDE QUESTIONS SECTION
  questionsEl.setAttribute("class", "show");

  // START TIMER
  timerId = setInterval(startTimer, 1000);

  // SHOW STARTING TIME ON HTML TIMER ELEMENT
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // GET CURRENT QUESTION OBJECT FROM ARRAY WITH THE GLOBAL INDEX VARIABLE
  var currentQuestion = questions[currentQuestionIndex];

  // UPDATE QUESTION ON HMTL QUESTION ELEMENT
  questionTextEl.textContent = currentQuestion.question;

 /* // CLEAR OUT OLD QUESTION CHOICES ON HTML CHOICES ELEMENT
  choicesEl.innerHTML = ""; */

  // LOOP OVER CHOICES ARRAY
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    // CREATE NEW BUTTON HTML ELEMENT FOR EACH CHOICE
    

    // ADD A CLASS ATTRIBUTE ON THIS BUTTON AND SET IT TO 'CHOICE'

    // ADD A VALUE ATTRIBUTE ON THIS BUTTON AND SET IT TO THE CURRENT CHOICE FROM ARRAY

    // SET TEXT CONTEXT OF THIS BUTTON TO THE CURRENT CHOICE FROM ARRAY

    // ADD EVENT LISTENER ON 'CLICK' TO THIS BUTTON, PASSING IN EVENT CALLBACK FUNCTION, userChoice

    // DISPLAY CHOICE ON THE PAGE BY APPENDING THIS BUTTON TO THE CHOICES ELEMENT


  };
}

// USER CHOICE EVENT CALLBACK FUNCTION
function userChoice(event) {
  // CHECK IF USER CHOICE IS WRONG
  // 1. event target has the choice button element on which user clicked
  //    that button element has the value attribute to contain the choice user clicked
  //    console.log the event target to look for the where the value attribute is
  // 2. get the anwer to the current question
  // 3. compare these two variables to check if user choice is wrong
  console.log(event.target);
  console.log(this); // this = event.target

  if (event.target.value !== questions[currentQuestionIndex].answer) {
    // PENALIZE TIME BY SUBTRACTING 10 SECONDS FROM THE GLOBAL TIME VARIABLE
    time -= 10;
    // IF TIME IS LESS THAN 0, MAKE IT EQUAL TO 0
    if (time < 0) {time === 0};

    // DISPLAY NEW TIME ON THE PAGE BY ASSIGNING TIME TO TEXT CONTEXT OF HTML TIMER ELEMENT
    timerEl.textContent = time;
    // ASSIGN  "WRONG!" TO TEXT CONTENT OF HTML FEEDBACK ELEMENT
    feedbackEl.textContent = "Wrong!";

  } else {
    // ASSIGN "CORRECT!" TO TEXT CONTENT OF HTML FEEDBACK ELEMENT
    feedbackEl.textContent = "Correct!";
  }

  // FLASH RIGHT/WRONG FEEDBACK ON PAGE FOR HALF A SECOND
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // MOVE TO NEXT QUESTION BY INCREMENTING THE GLOBAL INDEX VARIABLE
  currentQuestionIndex++;
  // CHECK IF WE'VE RUN OUT OF QUESTIONS
  // 1. if we've run out, call quizEnd function
  // 2. else call ask questions funciton
  if(currentQuestionIndex === questions.length) {
    quizEnd();
} else {
    getQuestion();
}

}

function quizEnd() {
  // STOP TIMER
  clearInterval(timerId);

  // SHOW END SCREEN
  endScreenEl.setAttribute("class", "show");

  // SHOW FINAL SCORE
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // HIDE QUESTIONS SECTION
  questionsEl.setAttribute("class", "hide");

}

function startTimer() {
  // UPDATE TIME
  // 1. decrement time by 1
  // 2. set time to text content of html timer element
  time--;
  timerEl.textContent = time;

  // check if user ran out of time
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // GET INITIALS VALUE FROM INPUT ELEMENT AND STORE IT TO A VARIABLE
  var initials = initialsEl.value.trim();

  // MAKE SURE INITIALS IS NOT EMPTY
  if (initials !== "") {
    // GET SAVED SCORES FROM LOCAL STORAGE AND CONVERT IT AND STORE IT TO AN ARRAY VARIABLE
    // OR IF NOT ANY, SET IT TO EMPTY ARRAY
  

    // CREATE A NEW SCORE OBJECT FOR THE USER TO STORE SCORE AND INITIALS
    var newScore = {
      score: time,
      initials: initials
    };

    // SAVE TO LOCAL STORAGE
    // 1. push new score object to the scores array
    // 2. save updated scores array to local storage. do not forget to convert the object to string before saving it
    
    JSON.stringify()

    // REDIRECT TO HIGH SCORES HTML PAGE
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
