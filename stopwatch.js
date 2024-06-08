let timerdisplay = document.querySelector('.timerdisplay')
let start = document.getElementById('start')
let stopbtn = document.getElementById('stop')
let reset = document.getElementById('reset')

 let mili = 0;
 let sec = 0;
 let mins = 0;

 let timerID = null;

start.addEventListener('click' , function() {
    if(timerID !== null ){
        clearInterval(timerID)
    }
   timerID = setInterval(starttimer , 10)
});

  stopbtn.addEventListener("click" , function(){
    clearInterval(timerID)
  })

  reset.addEventListener("click" , function() {
    clearInterval(timerID)
     timerdisplay.innerHTML = "00 : 00 : 00";
     mili = sec = mins = 0;

  })

function starttimer (){
    mili++;
    if(mili == 100){
        mili = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            mins ++ ;
        }
    }

    let milistring = mili<10 ? `0${mili}` : mili;
    let secstring = sec<10 ? `0${sec}` : sec;
    let minsstring = mins<10 ? `0${mins}` : mins;

    timerdisplay.innerHTML = `${minsstring} : ${secstring} : ${milistring}`;

 }
