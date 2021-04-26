const ErrorMag = (input, errorMsg) =>{
    const inpSegment = input.parentElement;
    const span = inpSegment.querySelector('span');
    span.innerText = errorMsg;
    inpSegment.className = 'inpSegment error';
}
const SuuccessMsg = (input)=>{
    const inpSegment = input.parentElement;
    inpSegment.className = 'inpSegment success';
}
let validationName = false;
let validationEmail = false;
const Name = document.getElementById('name');
const Email = document.getElementById('email');
const FormValidation = (e)=>{    
    if(Name.value.trim() === ""){
        ErrorMag(Name, 'Enter your name')
    }
    else{
        SuuccessMsg(Name);
        validationName = true;
    }
    var emailVal = Email.value.trim();
    var symbol = emailVal.indexOf('@');
    var dot = emailVal.lastIndexOf('.');
    
    if(emailVal === ""){
        ErrorMag(Email, "email can't blank");
    }
    else if(symbol < 1){
        ErrorMag(Email, "invalid email");
    }
    else if(dot <= symbol+2){
        ErrorMag(Email, "invalid email");
    }
    else{
        SuuccessMsg(Email);
        validationEmail = true;
    }
}
const LocalStorage = (e)=>{
    window.localStorage.setItem('email', Email.value);
    window.localStorage.setItem('name', Name.value);
    window.localStorage.setItem('ans1', 0);
    window.localStorage.setItem('ans2', 0);
    window.localStorage.setItem('ans3', 0);
    window.localStorage.setItem('ans4', 0);
    window.localStorage.setItem('ans5', 0);
    window.localStorage.setItem('timer', 0);
}

document.getElementById('button').addEventListener('click', (event)=>{
    event.preventDefault();
    FormValidation();
    console.log("Email", validationEmail);
    console.log("Name", validationName);
    if(validationEmail === true & validationName === true){
        LocalStorage();
        window. location. replace('quiz.html');
        
    }
});
