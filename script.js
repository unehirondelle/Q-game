//DOM dependencies
let timerEl = document.querySelector("#counter");
let starterEl = document.querySelector("#welcome-page");
let questionEl = document.querySelector("#question");

//questions
let questions = {
    question1: {
        q: "Commonly used data types DO NOT include:",
        a: ["strings", "booleans", "alerts", "numbers"]
    },
    question2: {
        q: "The condition in an if/else statement is enclosed within ___.",
        a: ["quotes", "curly brackets", "parentheses", "square brackets"]
    },
    // {q: "", a: []},
    // {q: "", a: []},
    // {q: "", a: []},
}
console.log(questions.question1);
//start countdown when user clicks Start Quiz button
function countDown() {
    let count = 75;
    let countInterval = setInterval(function () {
        timerEl.textContent = count;
        //console.log(count);
        count--;
        if (count < 0) {
            clearInterval(countInterval);
        }
    }, 1000);
}

//display question when user clicks the button
function askQuestion() {
starterEl.classList.add("hide");
questionEl.classList.remove("hide");

}

//verify the answer: show the result
//if the answer is incorrect substract 10 seconds from the remaining countdown
//show final page when all questions are answered / time is up
//include the score equals the remaining time on the final page
//open new page with scores after user clicks the submit button
//build the score table on a separate page