//Function that run repeatively after some interval of time:
// let count = 0;
// function timer(){
//     count++;
//     console.log(count)
// }
// let interval = setInterval(timer,1000)
// setTimeout(function(){
//     clearInterval(interval)
// },5000)


//Stop Watch:
let min =0;
let sec =0;
let msec = 0;
let interval;
let mins= document.getElementById("min");
let secs= document.getElementById("sec");
let msecs= document.getElementById("msec");
function timer(){
    msec++;
    msecs.innerHTML = msec;
    if(msec>=100){
        sec++;
        secs.innerHTML=sec;
        msec=0;
    }else if(sec>=60){
        min++;
        mins.innerHTML = min;
        sec = 0;
    }
}
function start(){
interval = setInterval(timer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    min = 0;
    sec = 0;
    msec =0;
    mins.innerHTML = min;
    secs.innerHTML = sec;
    msecs.innerHTML = msec;
    stop();

}