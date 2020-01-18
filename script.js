var questionTitle = document.getElementById('question');
var onClick = document.getElementById('onClick');

onClick.addEventListener('Start Quiz', function() {
  count++;
})

var question = [{
  title: "Commonly used data types that are Not included:",
  choice: ["stings", "booleans", "alerts", "number"],
  answer: "alerts",
},
{
  title: "The condition in an if/else statement is enclosed within ___?",
  choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses",
},
{
  title: "Arrays in JavaScript can be used to store?",
  choice: ["numbers and strings", "other arrays", "booleans", "all the above"],
  answer: "all the above",
},
{
  title: "Sting values must be enclosed within____ when being assigned to variables.",
  choice: ['commas', 'curly brackets', 'quotes', 'parentheses'],
  answer: 'quotes',
},
{
  title: "A very useful tool used during development and debugging for printing content to the debugger is?",
  choice: ["javaScript", "terminal/bash", "for loop", "console.log"],
  answer: "console.log",
}];

  var currentQuestion = 0;
// question[currentQuestion + 1];
console.log(currentQuestion);
console.log(question[currentQuestion]);

var questionToShow = question[currentQuestion];
questionTitle.textContent = question[currentQuestion].title;
questionToShow.choice.forEach(function (choice) {

})

question.forEach(function (q) {
  console.log(q);
  console.log(q.title);
  console.log(q.choice);
  
  console.log(question.answer);
  // questionTitle.textContent = q.title;
})

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById('main');
var onClickEl = document.getElementById('onClick');

var secondsLeft = 75;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "The big winner!";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}