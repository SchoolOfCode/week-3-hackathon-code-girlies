
async function retriveFortune() {
    const response = await fetch("https://api.adviceslip.com/advice",{
        
});
    const json = await response.json();
    console.log(json.slip.advice);
    return json;
}

retriveFortune()

// async function log() {
//     console.log(retriveFortune.advice)
// }

//console.log("hiii")