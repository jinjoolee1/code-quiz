//Questions
const questions = [{
    question: "Which of the following is NOT a commonly used data type?",
    answers: [ "Alerts", "Strings", "Booleans", "Numbers"],
    correctAnswer: "Alerts"

}, {
    question: "The condition in an 'If/Else' statement must be contained in",
    answers: [ "Brackets",  "Curly braces", "Parenthesis", "Quotations"], 
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
//buttons
const startButton = document.getElementById('start-btn')
const answerButtonsElement = document.getElementById('answer-buttons')
const submitButton = document.getElementById('submit-btn')
const answer1 = document.getElementById("btn1");
const answer2 = document.getElementById("btn2");
const answer3 = document.getElementById("btn3");
const answer4 = document.getElementById("btn4");