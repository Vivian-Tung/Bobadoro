const tim = {
    pomodoro: 55,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  };

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("default");
    link.addEventListener('click', function(){
        printStartTimer(tim.pomodoro,0);
        //console.log('Hello');
    })
})

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("short");
    link.addEventListener('click', function(){
        printStartTimer(tim.shortBreak,0);
    })
})

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("long");
    link.addEventListener('click', function(){
        printStartTimer(tim.longBreak,0);
    })
})

//start time when press on start 
document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("start");
    link.addEventListener('click', function() {
        startTimer();
    })
})

function printStartTimer(min, sec){
    if (sec < 10){
        sec = "0" + String(sec)
    }
    const tim2 = new String(min + ":" + sec);
    document.getElementById("timer").innerHTML = tim2;
}



// function startTimer(){
//     timerInterval = setInterval(() => {
//         //amount of time passed increments by one 
//         timePassed = timePassed += 1;
//         timeLeft = TIME_LIMIT - timePassed;

//         //time left label is updated 
//         document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);

//     }, 1000);
// }




function formatTimeLeft(tim) {
    //largest round integer less than or equal to the result of the time being divded by 60
    const minutes = Math.floor(tim/60);

    //seconds reminder of time division
    let seconds = tim % 60;

    // If the value of seconds is less than 10, then display seconds with a leading zero
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    // The output in MM:SS format
    return `${minutes}:${seconds}`;
}