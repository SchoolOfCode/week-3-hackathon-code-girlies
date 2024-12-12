// grabs the click button
const clickHereButton = document.getElementById("clickButton");

// button says when clicked to grab the adviceText from api
clickHereButton.addEventListener("click", getAndDisplayFortune);

// function to display the advice from the fetch request function [retrieveFortune]
async function getAndDisplayFortune() {
  const fortune = await retrieveFortune();
  displayFortune(fortune);
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
