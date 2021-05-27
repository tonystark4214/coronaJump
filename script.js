//varibale declaration
var lives = 0;
var totalScore = 0;
var mask = document.getElementById("reward");
var bg = document.getElementById("bg");
var score = document.getElementById("sc");
var jumper = document.getElementById("box")
var obstacle = document.getElementById("hurdle");
//this will create a jump function which adds jump animation
//class to the jumper div and will remove it after 700ms or 0.7s
function jump() {
    jumper.classList.add("jump");
    setTimeout(() => {
        jumper.classList.remove("jump");
    }, 1000);
}
//this will wait for a keypress and if the key is pressed
//it will check wether the div has jump animation or not
//if not then it will add jump animation
document.addEventListener("keypress", () => {
    if (!jumper.classList.contains("jump")) {
        jump();
    }
});
//it will check wether jumper and obstacle are colliding
//if yes then it will stop the game and will show the
//final score
setInterval(() => {
    var jumperLoc =
        parseInt(window.getComputedStyle(jumper)
            .getPropertyValue("bottom"));
    var obstacleLoc =
        parseInt(window.getComputedStyle(obstacle)
            .getPropertyValue("left"));
    /*var maskLoc =
        parseInt(window.getComputedStyle(mask)
            .getPropertyValue("left"));*/

    if (jumperLoc < 50 && obstacleLoc < 140 && obstacleLoc > 2){
        if (lives<1){
            obstacle.classList.remove("move");
            stop();
            bg.classList.remove("bganim");
            pause.style.display = "none";
            play.style.display = "block";
            score.innerHTML = "Score: " + totalScore + "<br>Game Over";
        }}
       /* else{
            lives=0;
        }
    }
    if (maskLoc < 140) {
        lives = 1;
        mask.style.display = "none";
        console.log(lives);
    }*/
},50);
//score
var interval = null;
function incre() {
    interval = setInterval(() => {
        totalScore = totalScore + 10;
        score.innerHTML = "Score:&nbsp;" + totalScore;
       /* //mask
        if (totalScore == 10) {
            mask.classList.add("maskMove");
        }
       /* if(totalScore==40){
            lives=0;
            console.log(lives +"left");
        }*/
    }, 2000);
}
//stop score incrementing
function stop() {
    clearInterval(interval);
}
//play and pause
var play = document.getElementById("play");
var pause = document.getElementById("pause");
play.addEventListener('click', function () {
    play.style.display = "none";
    pause.style.display = "block";
    bg.classList.add("bganim");
    obstacle.classList.add("move");
    totalScore = 0;
    score.innerHTML = "Score:&nbsp;" + totalScore;
    incre();
})
pause.addEventListener('click', function () {
    pause.style.display = "none";
    play.style.display = "block";
    obstacle.classList.remove("move");
    bg.classList.remove("bganim");
    stop();
})


