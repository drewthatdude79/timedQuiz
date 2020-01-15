var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);

var questionTitle = document.getElementById('question');

var question = [ {
        title: "Commonly used data types that are Not included:",
        choice: ["stings", "booleans", "alerts", "number"],
        answer: "alerts"
    }]
question.forEach(function(question) {
  console.log(question);
  console.log(question.title);
  console.log(question.choice);
  question.choice.forEach(function(choice) {

  })
  console.log(question.answer);
  questionTitle.textContent = question.title;
});    
