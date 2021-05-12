var timer = 20;
var questions = [""];

function startQuiz() {

}

var timeLeft = setInterval(function() {
    document.getElementById('countdown').innerHTML = count;
    count--;
    if (count === 0){
      clearInterval(timeLeft);
      alert("You lose!");
    }
  }, 1000);