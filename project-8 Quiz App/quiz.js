function StartTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
        window.localStorage.setItem('timer', timer);

    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 5,
    display = document.getElementById('time');
    StartTimer(fiveMinutes, display);
};

document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
document.getElementById('next1').addEventListener('click', (e)=>{
    // console.log(document.getElementById('next1').parentElement.classList[1]);
    if(document.getElementById('next1').parentElement.classList[1] === 'qu1'){
        document.querySelector('.qu1').style.visibility = 'hidden';
        document.querySelector('.qu2').style.visibility = 'visible';
        document.getElementById('Qno').innerHTML = "Questions: 2/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
    }
});
document.getElementById('previous2').addEventListener('click', (e)=>{
    // console.log(document.getElementById('previous2').parentElement.classList[1]);
    if(document.getElementById('previous2').parentElement.classList[1] === 'qu2'){
        document.querySelector('.qu1').style.visibility = 'visible';
        document.querySelector('.qu2').style.visibility = 'hidden';
        document.getElementById('Qno').innerHTML = "Questions: 1/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
    }
});
document.getElementById('next2').addEventListener('click', (e)=>{
    // console.log(document.getElementById('next2').parentElement.classList[1]);
    if(document.getElementById('next2').parentElement.classList[1] === 'qu2'){
        document.querySelector('.qu2').style.visibility = 'hidden';
        document.querySelector('.qu3').style.visibility = 'visible';
        document.getElementById('Qno').innerHTML = "Questions: 3/5";
        document.getElementById('answ').innerHTML ="Ans: 0";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
    }
});
document.getElementById('previous3').addEventListener('click', (e)=>{
    // console.log(document.getElementById('previous3').parentElement.classList[1]);
    if(document.getElementById('previous3').parentElement.classList[1] === 'qu3'){
        document.querySelector('.qu2').style.visibility = 'visible';
        document.querySelector('.qu3').style.visibility = 'hidden';
        document.getElementById('Qno').innerHTML = "Questions: 2/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        
    }
});
document.getElementById('next3').addEventListener('click', (e)=>{
    // console.log(document.getElementById('next3').parentElement.classList[1]);
    if(document.getElementById('next3').parentElement.classList[1] === 'qu3'){
        document.querySelector('.qu3').style.visibility = 'hidden';
        document.querySelector('.qu4').style.visibility = 'visible';
        document.getElementById('Qno').innerHTML = "Questions: 4/5";
        document.getElementById('answ').innerHTML ="Ans: 0";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
    }
});
document.getElementById('previous4').addEventListener('click', (e)=>{
    // console.log(document.getElementById('previous4').parentElement.classList[1]);
    if(document.getElementById('previous4').parentElement.classList[1] === 'qu4'){
        document.querySelector('.qu3').style.visibility = 'visible';
        document.querySelector('.qu4').style.visibility = 'hidden';
        document.getElementById('Qno').innerHTML = "Questions: 3/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
    }
});
document.getElementById('next4').addEventListener('click', (e)=>{
    // console.log(document.getElementById('next4').parentElement.classList[1]);
    if(document.getElementById('next4').parentElement.classList[1] === 'qu4'){
        document.querySelector('.qu4').style.visibility = 'hidden';
        document.querySelector('.qu5').style.visibility = 'visible';
        document.getElementById('Qno').innerHTML = "Questions: 5/5";
        document.getElementById('answ').innerHTML ="Ans: 0";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
    }
});
document.getElementById('previous5').addEventListener('click', (e)=>{
    console.log(document.getElementById('previous5').parentElement.classList[1]);
    if(document.getElementById('previous5').parentElement.classList[1] === 'qu5'){
        document.querySelector('.qu4').style.visibility = 'visible';
        document.querySelector('.qu5').style.visibility = 'hidden';
        document.getElementById('Qno').innerHTML = "Questions: 4/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
    }
});
document.getElementById('next5').addEventListener('click', (e)=>{
    console.log(document.getElementById('next5').parentElement.classList[1]);
    if(document.getElementById('next5').parentElement.classList[1] === 'qu5'){
        // document.querySelector('.qu1').style.visibility = 'hidden';
        document.querySelector('.qu5').style.visibility = 'hidden';
        document.querySelector('.checkQ').style.visibility = 'visible';
        document.getElementById('answ').innerHTML ="";
    }
});
document.getElementById('checkb').addEventListener('click', (e)=>{
    // console.log(document.getElementById('checkb').parentElement.classList[1]);
    if(document.getElementById('checkb').parentElement.classList[1] === 'checkQ'){
        document.querySelector('.checkQ').style.visibility = 'hidden';
        document.querySelector('.qu1').style.visibility = 'visible';
        document.getElementById('Qno').innerHTML = "Questions: 1/5";
        document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
    }
});
document.getElementById('submitb').addEventListener('click', (e)=>{
    window. location. replace('submit.html');
});

// A1
const AnswersFunc1 = (event)=>{
    // console.log(event.target.classList[1]);
    var classList = event.target.classList[1];
    var ans1;
    if(classList === '1'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans1', 1);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
        else{
            window.localStorage.setItem('ans1', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
             
    }else if(classList === '2'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans1', 2);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
        else{
            window.localStorage.setItem('ans1', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
    }else if(classList === '3'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans1', 3);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
        else{
            window.localStorage.setItem('ans1', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
    }else if(classList === '4'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans1', 4);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
        else{
            window.localStorage.setItem('ans1', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans1');
        }
    }else{
        return;
    }
}
// A2
const AnswersFunc2 = (event)=>{
    // console.log(event.target.classList[1]);
    var classList = event.target.classList[1];
    if(classList === '1'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans2', 1);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }
        else{
            window.localStorage.setItem('ans2', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }             
    }else if(classList === '2'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans2', 2);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }else{
            window.localStorage.setItem('ans2', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }
    }else if(classList === '3'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans2', 3);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }else{
            window.localStorage.setItem('ans2', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }
    }else if(classList === '4'){
        var act = event.target.classList.toggle('active');
        if(act){ 
            window.localStorage.setItem('ans2', 4);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }else{
            window.localStorage.setItem('ans2', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans2');
        }
    }else{
        return;
    }
}
// A3
const AnswersFunc3 = (event)=>{
    // console.log(event.target.classList[1]);
    var classList = event.target.classList[1];
    if(classList === '1'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans3', 1);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }else{
            window.localStorage.setItem('ans3', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }             
    }else if(classList === '2'){
        var act = event.target.classList.toggle('active');
        if(act){ 
            window.localStorage.setItem('ans3', 2);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }else{
            window.localStorage.setItem('ans3', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }
    }else if(classList === '3'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans3', 3); 
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }else{
            window.localStorage.setItem('ans3', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }
    }else if(classList === '4'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans3', 4);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }else{
            window.localStorage.setItem('ans3', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans3');
        }
    }else{
        return;
    }
}
// A4
const AnswersFunc4 = (event)=>{
    // console.log(event.target.classList[1]);
    var classList = event.target.classList[1];
    if(classList === '1'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans4', 1);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }else{
            window.localStorage.setItem('ans4', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }             
    }else if(classList === '2'){
        var act = event.target.classList.toggle('active');
        if(act){ 
            window.localStorage.setItem('ans4', 2);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }else{
            window.localStorage.setItem('ans4', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }
    }else if(classList === '3'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans4', 3);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4'); 
        }else{
            window.localStorage.setItem('ans4', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }
    }else if(classList === '4'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans4', 4);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }else{
            window.localStorage.setItem('ans4', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans4');
        }
    }else{
        return;
    }
}
// A5
const AnswersFunc5 = (event)=>{
    // console.log(event.target.classList[1]);
    var classList = event.target.classList[1];
    if(classList === '1'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans5', 1);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }else{
            window.localStorage.setItem('ans5', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }             
    }else if(classList === '2'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans5', 2);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }else{
            window.localStorage.setItem('ans5', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }
    }else if(classList === '3'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans5', 3); 
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }else{
            window.localStorage.setItem('ans5', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }
    }else if(classList === '4'){
        var act = event.target.classList.toggle('active');
        if(act){
            window.localStorage.setItem('ans5', 4);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }else{
            window.localStorage.setItem('ans5', 0);
            document.getElementById('answ').innerHTML ="Ans: " + window.localStorage.getItem('ans5');
        }
    }else{
        return;
    }
}


// Answers 1
for(const Ans of document.querySelectorAll('.answers1')){
    Ans.addEventListener('click', AnswersFunc1);
}
// Answers 2
for(const Ans2 of document.querySelectorAll('.answers2')){
    Ans2.addEventListener('click', AnswersFunc2);
}
// Answer 3
for(const Ans3 of document.querySelectorAll('.answers3')){
    Ans3.addEventListener('click', AnswersFunc3);
}
// Answer 4
for(const Ans4 of document.querySelectorAll('.answers4')){
    Ans4.addEventListener('click', AnswersFunc4);
}
// Answer 5
for(const Ans5 of document.querySelectorAll('.answers5')){
    Ans5.addEventListener('click', AnswersFunc5);
}
