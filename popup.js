const tim = {
    pomodoro: 55,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
  };

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("default");
    link.addEventListener('click', function(){
        startTimer(tim.pomodoro,0);
        //console.log('Hello');
    })
})

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("short");
    link.addEventListener('click', function(){
        startTimer(tim.shortBreak,0);
    })
})

document.addEventListener('DOMContentLoaded', function(){
    var link = document.getElementById("long");
    link.addEventListener('click', function(){
        startTimer(tim.longBreak,0);
    })
})


function startTimer(min, sec){
    if (sec < 10){
        sec = "0" + String(sec)
    }
    const tim2 = new String(min + ":" + sec);
    document.getElementById("timer").innerHTML = tim2;
}

function startDecreasing(){
    
}

// function test1() {
//     console.log("Here");
// }