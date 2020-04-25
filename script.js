var currentQuestion = 0;

var questionTitle = document.getElementById('question');
var startQuiz = document.getElementById('onClick');

startQuiz.addEventListener('click', function() {
  event.preventDefault();
  console.log("You started the Quiz");
});

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
 //start quiz 
 //change start screen to hide
 //remove attribute
 //questions.removeAttribute("class");
 //start time call clock function and set interval
 
question[currentQuestion += 1];
console.log(currentQuestion);
console.log(question[currentQuestion]);

var questionToShow = question[currentQuestion];
questionTitle.textContent = question[currentQuestion].title;

questionToShow.choice.forEach(function(choice) {

})
// add NEXT button to get the next question.
question.addEventListener("onClick", function (q) {
  currentQuestion++;
  questionNow = question[currentQuestion];
 questionTitle.text(questionNow.title);
 userChoice.innerHTML = "";
 
 questionNow.choice.forEach(choices, i) {
   var choiceBtn = document.createElement("button");
   choiceBtn.setAttribute("class", "choice");
   choiceBtn.setAttribute("value", choices);
   choiceBtn.textContent = i + 1 + '.' + choices;

   choiceBtn.onclick = checkAnswer();

   userChoice.appendChild(choiceBtn);
 }

 function checkAnswer() {
   if (this.value !== question[currentQuestion].answer){
     secondsLeft -= 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    timeEl.textContent = secondsLeft;
    alert("Wrong answer");
   } else {
     alert("Right answer!");
   }
   if (currentQuestion === question.length) {
     endQuiz();
   } else {

   }
 }
  console.log('q.title------->', q.title);
  console.log(q.choice);
  questionTitle.textContent = q.title;
})

var timeEl = document.querySelector(".time");
var mainEl = document.querySelector('.main');
var userChoice = document.querySelector(".userChoice");
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