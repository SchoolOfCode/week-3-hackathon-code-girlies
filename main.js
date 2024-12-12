
async function retriveFortune() {
    const response = await fetch("https://api.adviceslip.com/advice",{
        
});
    const json = await response.json();
    console.log(json);
    return json;
}

retriveFortune()


//console.log("hiii")