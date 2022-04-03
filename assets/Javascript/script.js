//Questions
const questions = [{
    question: "Which of the following is NOT a commonly used data type?",
    answers: [ "Alerts", "Strings", "Booleans", "Numbers"],
    correctAnswer: "Alerts"

}, {
    question: "The condition in an 'If/Else' statement must be contained in",
    answers: [ "Brackets", "Parenthesis", "Curly braces",  "Quotations"], 
    correctAnswer: "Parenthesis"
    
}, {
    question: "String values must be enclosed within ____ when being assigned to variables",
    answers: ["Quotes",  "Square brackets",  "Curly braces",  "Parentheses"],
    correctAnswer: "Curly braces" 
    
}, {
    question: "Arrays in Javascript can be used to store",
    answers: ["Other arrays", "Numbers and strings",  "Booleans",  "All of the above"], 
    correctAnswer: "All of the above"

}, {
    question: "A very useful tool used during development and debugging for printing content to the debugger is",
    answers: ["Javascript", "for loops", "console.log",  "terminal/bash"], 
    correctAnswer: "terminal/bash"
}];

const timerEl = document.getElementById("timer");

// Start quiz
function startGame() {
    showElement(QUIZ_SECTIONS, QUIZ_SECTION);
    
    displayTime();  
    displayQuestion();
  
    startTimer();
  }

// Timer 
function displayTime() {
    TIME_REMAINING.textContent = totalTime;
  }
  
  function startTimer() {
    totalTimeInterval = setInterval(function() {
      totalTime--;
      displayTime();
      checkTime();
  
    }, 1000);
  }
  
  function checkTime() {
    if (totalTime <= 0) {
      totalTime = 0;
      endGame();
    }
  }

//Quiz questions functions
function displayQuestion() {
  QUESTION.textContent = QUESTION_LIST[currentQuestion].question;

  displayChoiceList();
}

function displayChoiceList() {
  CHOICES.innerHTML = "";

  QUESTION_LIST[currentQuestion].choices.forEach(function(answer, index) {
    const li = document.createElement("li");
    li.dataset.index = index;
    const button = document.createElement("button");
    button.textContent = (index + 1) + ". " + answer;
    li.appendChild(button);
    CHOICES.appendChild(li);
  });
}



// Right answer function
function rightAnswer() {
    score = timeLeft
    feedback.innerHTML = ("Correct");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}
//  Wrong answer function
function wrongAnswer() {
    timeLeft = (timeLeft - 10)
    feedback.innerHTML = ("Wrong");
    setTimeout(function() {feedback.innerHTML = ("");}, 800)
}

//Quiz buttons
const startButton = document.getElementById('start-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const submitButton = document.getElementById('submit-btn')
const answer1 = document.getElementById("btn1");
const answer2 = document.getElementById("btn2");
const answer3 = document.getElementById("btn3");
const answer4 = document.getElementById("btn4");

// Clears high scores
function clearStorage() {
    localStorage.clear();
    window.location.reload();
}

// Event listeners

document.getElementById("clear").onclick = clearHighscores;
startButton.addEventListener('click', startGame)
answer1.addEventListener("click", checkAnswer)
answer2.addEventListener("click", checkAnswer)
answer3.addEventListener("click", checkAnswer)
answer4.addEventListener("click", checkAnswer)
viewScoreList.addEventListener("click", viewHighScores)