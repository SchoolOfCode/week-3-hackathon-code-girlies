// grabs the click button 
const clickHereButton = document.getElementById("clickButton");

// button says when clicked to grab the adviceText from api
clickHereButton.addEventListener("click",getAndDisplayFortune);


// function to display the advice from the fetch request function [retrieveFortune]
async function getAndDisplayFortune() {
    const fortune = await retrieveFortune();
    displayFortune(fortune);
} 

// 'fetch advice from API' function
async function retrieveFortune() {
    const response = await fetch("https://api.adviceslip.com/advice",{
        
});
    const json = await response.json();
    console.log(json.slip.advice);
    return json;
}

// grabbing the <p> element for where the advice will go on the web page

function displayFortune(fortune) {
    const adviceText = document.getElementById("adviceText");
    adviceText.textContent = fortune.slip.advice
}
retrieveFortune()

// async function log() {
//     console.log(retriveFortune.advice)
// }

//console.log("hiii")