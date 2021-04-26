const start = document.getElementById('start');
const reset = document.getElementById('reset');
const pause = document.getElementById('pause');

const minutes = document.getElementById('minutes');
const second = document.getElementById('second');
const m_second = document.getElementById('m_second');
var m = 0, s = 0, ms = 0;
var timer;

const ForRunTime = () =>{
    if(ms === 100){
        ms = 0;
        s++;
    }
    if(s === 60){
        s = 0;
        m++;
    }
    minutes.textContent = (m < 10)? '0' + m:m;
    second.textContent = (s < 10)? '0' + s:s;
	m_second.textContent = (ms < 10)? '0' + ms:ms;
	ms++;
}
const ForStart = () =>{
    if(!timer){
        timer = setInterval(ForRunTime, 10);
    }
}
const ForPause = () =>{
    clearInterval(timer);
    timer = false;
}
const ForReset = () =>{
    clearInterval(timer);
    timer = false;
    m = 0;
    s = 0;
    ms = 0;
    minutes.textContent = (m < 10)? '0' + m:m;
    second.textContent = (s < 10)? '0' + s:s;
    m_second.textContent = (ms < 10)? '0' + ms:ms;
}
start.addEventListener('click', (event) =>{
    event.preventDefault();
    ForStart();
});
pause.addEventListener('click', (event) =>{
    event.preventDefault();
    ForPause();
});
reset.addEventListener('click', (event) =>{
    event.preventDefault();
    ForReset();
});
