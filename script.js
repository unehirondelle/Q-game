//DOM dependencies
let timerEl = document.querySelector("#counter");
let starterEl = document.querySelector("#starter");
let questionWrapperEl = document.querySelector("#questionWrapper");
let questionEl = document.querySelector("#question");
let answersEl = document.querySelector("#answers");
// let answerItemEl = document.querySelector("#answers > li > button");
// //let answerItemEl = document.querySelectorAll("#answers" > "li");
// console.log(`answerItemEl: ${answerItemEl}`);


//questions
let questions =
    [{
        question: "Commonly used data types DO NOT include:",
        options: ["strings", "booleans", "alerts", "numbers"],
        answer: 2
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        options: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: 2
    },
    {
        question: "Arrays in JavaScripte can be ised to store ___.",
        options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        options: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: 2
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: 3
    }
    ]

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

let index = 0;
//display question when user clicks the button
function askQuestion() {
    console.log("questionIndex", questions[index]);
    let options = questions[index].options;
    questionEl.textContent = questions[index].question;
    let optionLi = document.querySelectorAll(".optionLi");
    for (let j = 0; j < optionLi.length; j++){
        optionLi[j].parentNode.removeChild(optionLi[j]);
    }
    
    for (let i = 0; i < options.length; i++) {
        // console.log("listitem: " + list[i]);
        let answerButtonEl = document.createElement("button");
        answerButtonEl.textContent = (i + 1) + ". " + options[i];
        answerButtonEl.classList.add("option");
        answerButtonEl.setAttribute("optionIndex", i)
        let answerItemEl = document.createElement("li");
        answerItemEl.classList.add("optionLi");
        answerItemEl.appendChild(answerButtonEl);
        document.querySelector("ul").appendChild(answerItemEl);
    }
    addEventListenerToOptions();
}

document.querySelector("#start").addEventListener("click", function () {
    starterEl.classList.add("hide");
    questionWrapperEl.classList.remove("hide");
    countDown();
    askQuestion();
}
)

//verify the answer: show the result

function addEventListenerToOptions() {
    let optionNodes = document.querySelectorAll(".option");
    for (let i = 0; i < optionNodes.length; i++) {
        optionNodes[i].addEventListener("click", function () {
            const optionIndex = event.target.getAttribute("optionIndex");
            console.log("selected option: ", optionIndex, questions[index]);
            if (parseInt(optionIndex) === questions[index].answer) {                
                console.log("Correct answer");
                index++;
                askQuestion();
            } else {
                console.log("OptionIndex", optionIndex, questions[index].answer);
                console.log("Incorrect answer");
            }
        })
    }

}

//if the answer is incorrect substract 10 seconds from the remaining countdown
//show final page when all questions are answered / time is up
//include the score equals the remaining time on the final page
//open new page with scores after user clicks the submit button
//build the score table on a separate page