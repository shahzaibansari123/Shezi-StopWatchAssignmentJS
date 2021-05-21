var minHead = document.getElementById('min')
var secHead = document.getElementById('sec')
var msecHead = document.getElementById('msec')
var btndis = document.getElementById('disabled')

var min = 00;
var sec = 00;
var msec = 00;
var interval;

function timer(){
    msec++
    msecHead.innerHTML = msec
    if(msec == 100 ){
        sec++
        secHead.innerHTML= sec
        msec=00
    }else if(sec == 60){
        min++
        minHead.innerHTML=min
        sec = 00
    }
}

function start(){
  interval =  setInterval(timer,10)
  btndis.disabled = true
}

function pause(){
    clearInterval(interval)
    btndis.disabled = false
}

function reset(){
    msec= 00;
    sec= 00;
    min= 00;

    msecHead.innerHTML= msec;
    secHead.innerHTML= sec;
    minHead.innerHTML= min;
    clearInterval(interval)
    btndis.disabled = false
}
