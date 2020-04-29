const currentQuestion = 0;
let secondsLeft = 75;

const timeEl = document.getElementById('timeCounter');
const questionTitle = document.getElementById('questions');
const startQuizEl = document.getElementById('onClick');
const questionsEl = document.getElementById('questionContainer');

startQuizEl.addEventListener('click', function (event) {
  event.preventDefault();
  console.log("You started the Quiz");
  console.log(questions[currentQuestion]);
  startQuiz();
});

const questions = [{
  title: "What can you put in a barrel to make it lighter___?:",
  choices: ["ants", "banana", "a hole", "air"],
  answer: "a hole",
},
{
  title: "The condition in an if/else statement is enclosed within ___?",
  choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
  answer: "parentheses",
},
{
  title: "Arrays in JavaScript can be used to store?",
  choices: ["numbers and strings", "other arrays", "booleans", "all the above"],
  answer: "all the above",
},
{
  title: "Sting values must be enclosed within____ when being assigned to variables.",
  choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
  answer: 'quotes',
},
{
  title: "A very useful tool used during development and debugging for printing content to the debugger is?",
  choices: ["javaScript", "terminal/bash", "for loop", "console.log"],
  answer: "console.log",
}];

function startQuiz() {
  console.log(startQuiz);
  const startScreen = document.getElementById('startScreen');
  startScreen.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  setTimeout();
  getQuestion();
}
function getQuestion() {

  const userChoicesEl = document.querySelector('.userChoice');
  userChoicesEl.innerHTML = "";

  const questionNow = questions[currentQuestion];
  questionTitle.textContent = questions[currentQuestion].title;

  
  console.log(userChoicesEl);

  questionNow.choices.forEach(function (choice, i) {
    const choiceBtn = document.createElement("button");
    choiceBtn.setAttribute("class", "choice");
    choiceBtn.setAttribute("value", choice);
    choiceBtn.textContent = i + 1 + '.' + choice;

    choiceBtn.onclick = checkAnswer;

    userChoicesEl.appendChild(choiceBtn);

  });

}
function checkAnswer() {
  if (this.value !== questions[currentQuestion].answer) {
    secondsLeft -= 15;
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
    timeEl.textContent = secondsLeft;
    alert("Wrong answer");
  } else {
    alert("Right answer!");
  }
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}
function endQuiz() {
  clearInterval(timerInterval);
  questionsEl.setAttribute("class", "hide");
  const endScreen = document.getElementById("endScreen");
  endScreen.removeAttribute("class");
  const finalScore = document.getElementById('finalScore');
  finalScore.textContent = secondsLeft;
}
function saveHighScore() {
  const initals = document.getElementById('initalsHere');
  const userInitals = initals.value.trim();

  if (userInitals !== "") {
    //existing hs's
    const highScores = JSON.parse(window.localStorage.getItem("highScores")) || [];
    //new score entering array
    let newScore = {
      userInitals: userInitals,
      score: time
    }
    // push newScore into hiighscore
    highScores.push(newScore);
    //set items using JSON stringfy
    localStorage.setItem("highScores", JSON.stringify(highScores));

    //redircect to high schores page
    window.location.href = "highScores.html";
  }
}

function setTimeout() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;
}

// questions[currentQuestion += 1];
// console.log(currentQuestion);
// console.log(question[currentQuestion]);

// questions.addEventListener("onClick", function (q) {
//   event.defaultPrevented();
//   currentQuestion++;
//   questionNow = questions[currentQuestion];
//   questionTitle.text(questionNow.title);
//   userChoice.innerHTML = "";
// });


// })


// console.log('q.title------->', q.title);
// console.log(q.choice);
// questionTitle.textContent = q.title;

// const timeEl = document.querySelector(".time");
// const mainEl = document.querySelector('.main');
// const userChoice = document.querySelector(".userChoice");
// const secondsLeft = 75;

// function setTime() {
//   const timerInterval = setInterval(function () {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + "The big winner!";

//     if (secondsLeft === 0) {
//       clearInterval(timerInterval);
//       sendMessage();
//     }

  // }, 1000);
// }