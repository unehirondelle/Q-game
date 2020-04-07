//DOM dependencies
let timerEl = document.querySelector("#counter");
let starterEl = document.querySelector("#welcome-page");
let questionWrapperEl = document.querySelector("#questionWrapper");
let questionEl = document.querySelector("#question");
let answersEl = document.querySelector("#answers");
// let answerItemEl = document.querySelector("#answers > li > button");
// //let answerItemEl = document.querySelectorAll("#answers" > "li");
// console.log(`answerItemEl: ${answerItemEl}`);


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
console.log(questions.question1.a[0]);
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
    questionWrapperEl.classList.remove("hide");
    let list = questions.question1.a;
    questionEl.textContent = questions.question1.q;
    for (let i = 0; i < list.length; i++) {
        console.log("listitem: " + list[i]);
        let answerButtonEl = document.createElement("button");
        answerButtonEl.textContent = list[i];
        let answerItemEl = document.createElement("li");
        answerItemEl.appendChild(answerButtonEl);
        document.querySelector("ul").appendChild(answerItemEl);
    }


}

//verify the answer: show the result
//if the answer is incorrect substract 10 seconds from the remaining countdown
//show final page when all questions are answered / time is up
//include the score equals the remaining time on the final page
//open new page with scores after user clicks the submit button
//build the score table on a separate page