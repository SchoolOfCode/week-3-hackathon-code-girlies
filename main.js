// grabs the click button
const clickHereButton = document.getElementById("clickButton");

// button says when clicked to grab the adviceText from api
clickHereButton.addEventListener("click", getAndDisplayFortune);

// function to display the advice from the fetch request function [retrieveFortune]
async function getAndDisplayFortune() {
  const fortune = await retrieveFortune();
  displayFortune(fortune);
  questionInput.value= " ";
}

// 'fetch advice from API' function
async function retrieveFortune() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-store",
    });
    const json = await response.json();
    console.log(json.slip.advice);
    return json.slip.advice;
  } catch {
    console.log("API Request Unsuccessful");
  }
}

// grabbing the <p> element for where the advice will go on the web page

function displayFortune(fortune) {
  const adviceText = document.getElementById("adviceText");
  adviceText.textContent = fortune;
}
retrieveFortune();

// add a keydown event listener to detect when the "enter key" is pressed
const questionInput = document.getElementById("questionInput");

questionInput.addEventListener("keydown", (event) =>{ 
    if (event.key === "Enter"){

// this clears the question input field once enter pressed/button clicked
        questionInput.value= " ";    
        console.log ('Enter key pressed');
    }
})


const magic8balltop = document.getElementById("eightBallTop");

function top8BallVanish() {
  magic8balltop.style.opacity = 0;
}

function top8ballReappear() {
  magic8balltop.style.opacity = 100;
}


magic8balltop.addEventListener("mouseover", top8BallVanish);
magic8balltop.addEventListener("mouseleave", top8ballReappear);

