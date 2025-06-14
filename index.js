let songFail = new Audio("./Audio/error.mp3");
let songPass = new Audio("./Audio/d.mp3");
let songEnter = new Audio("./Audio/c.mp3");
let songGoodNew = new Audio("./Audio/e.mp3");
let songFair = new Audio("./Audio/f.mp3");
let songVeryGood = new Audio("./Audio/b.mp3");
let songExcellent = new Audio("./Audio/A.mp3");
let songError = new Audio("./Audio/error.mp3");

function grade() {
    const score = Number(scoreInput.value);

    if (scoreInput.value === "") {
        result.innerHTML = "Enter score 1-100";
        songEnter.play();
    } else {
        if (score >= 0 && score < 40) {
            result.innerHTML = "Fail";
            songFail.play();
        } else if (score >= 41 && score < 45) {
            result.innerHTML = "Pass";
            songPass.play();
        } else if (score >= 46 && score < 50) {
            result.innerHTML = "Fair";
            songFair.play();
        } else if (score >= 50 && score < 60) {
            result.innerHTML = "Good";
            songGoodNew.play();
        } else if (score >= 60 && score < 70) {
            result.innerHTML = "Very Good";
            songVeryGood.play();
        } else if (score >= 70 && score <= 100) {
            result.innerHTML = "Excellent";
            songExcellent.play();
        } else if (score > 100) {
            result.innerHTML = "Enter score between 1-100";
            songError.play();
        }
    }
}