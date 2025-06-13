// let songFail = new Audio("./Audio/20250613_134359.aac")
function grade() {
    const score = Number(scoreInput.value)
    if (score == "" ){
        result.innerHTML="Enter score 1-100"
    } else {
        if (score >=0 && score < 40){
            result.innerHTML = "Fail";
            // songFail.play();
        } else if (score >=41 &&  score < 45){
            result.innerHTML = "pass";
        } else if (score >=46 &&  score < 50){
            result.innerHTML = "Fair ";
        } else if (score >= 50 && score < 60){
            result.innerHTML = "Good";
        } else if (score >= 60 && score < 70){
            result.innerHTML = "Very Good";
        } else if (score >= 70 && score <= 100)
            result.innerHTML="Excellent";
            else if (score > 100){
                result.innerHTML="Enter score between 100"
            }
    }
    }