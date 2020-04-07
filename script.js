//DOM dependencies
let timer = document.querySelector("#counter");
//start countdown when users clicks Start Quiz button

function countDown() {
    let count = 75;

    let countInterval = setInterval(function () {
        timer.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(countInterval);
        }
    }, 1000);
    
    console.log(count);
}
//display question when users clicks the button
//verify the answer: show the result
//if the answer is incorrect substract 10 seconds from the remaining countdown
//show final page when all questions are answered / time is up
//include the score equals the remaining time on the final page
//open new page with scores after user clicks the submit button
//build the score table on a separate page