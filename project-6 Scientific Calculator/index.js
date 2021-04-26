const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll('.number');
// console.log(operators);
// console.log(numbers);
// Formatted String (comma separated):-----
const getFormattednumber = (num)=>{
    if(num == ""){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString('en');
    return value;
}
// Remove Formatted (remove comma):--------
const reverseFormattedNumber = (num)=>{
    return Number(num.replace(/,/g,''));
}
const getHistory = ()=>{
    return document.querySelector('.history-value').innerText;
}
const prinHistory = (num)=>{
    return document.querySelector('.history-value').innerText = num;
}
const getOutput = ()=>{
    return document.querySelector('.output-value').innerText;
}
const printOutput = (num)=>{
    if(num == ""){
        return document.querySelector('.output-value').innerText = num;
    }
    else{
        return document.querySelector('.output-value').innerText = getFormattednumber(num);
    }
}

const ForNumber = (event)=>{
    //console.log(event.target.classList[1]);
    var output = reverseFormattedNumber(getOutput());
    if(output != NaN){
        output += event.target.classList[1];
        printOutput(output);   
    }
}
const ForOperator = (event)=>{
    // console.log(event.target);
    if(event.target.classList[1] === 'clear'){
        printOutput("");
        prinHistory("");
    }
    else if(event.target.classList[1] == 'backspace'){
        var output = reverseFormattedNumber(getOutput()).toString();
        if(output){
            output = output.substr(0, output.length-1);
            printOutput(output);
        }
    }
    else{
        var output = getOutput();
		var history = getHistory();
		if(output == "" && history != ""){
			if(isNaN(history[history.length-1])){
				history = history.substr(0, history.length-1);
			}
        }
        if(output != "" || history != ""){
            output = output == ""? output: reverseFormattedNumber(output);
            history += output;
            if(event.target.classList[1] === "equal"){
                var result = eval(history);
                printOutput(result);
                prinHistory("");
            }
            else{
                history += event.target.classList[1];
                prinHistory(history);
                printOutput("");
            }
        }
    }
}
for(const number of numbers){
    number.addEventListener('click', ForNumber);   
}
for(const operator of operators){
    operator.addEventListener('click', ForOperator);
}

let sciCalIsrun = true;
document.querySelector('.forward').addEventListener('click', (e)=>{
    document.querySelector(".scientific_cal").style.visibility = 'visible';
    sciCalIsrun = true;
});
document.querySelector('.backward').addEventListener('click', (e)=>{
    document.querySelector(".scientific_cal").style.visibility = 'hidden';
    sciCalIsrun = !sciCalIsrun;
    // console.log(sciCalIsrun);
});



const SciCal = (event) =>{
    if(sciCalIsrun){
        // console.log(event.target.classList[1]);
        var output = reverseFormattedNumber(getOutput());
        var output2 = reverseFormattedNumber(getOutput());
        const classList = event.target.classList[1];
        if(classList === 'radian'){
            printOutput(output* Math.PI/180);
        }
        else if(classList == 'sqrt' || classList == 'sqrt'){
            printOutput(Math.sqrt(output));
        }
        else if(classList === 'ln'){
            printOutput(Math.log(output)) 
        }
        else if(classList === 'sin'){
            printOutput(Math.sin(output));
        }
        else if(classList === 'cos'){
            printOutput(Math.cos(output));
        }
        else if(classList === 'tan'){
            printOutput(Math.tan(output));
        }
        else if(classList === 'log_10'){
            printOutput(Math.log10(output));
        }
        else if(classList === '1/x'){
            printOutput(1/output);
        }
        else if(classList === 'x^2'){
            printOutput(Math.pow(output, 2));
        }
        else if(classList === 'e^x'){
            printOutput(Math.exp(output));
        }
        else if(classList === 'x^x'){
            printOutput(Math.pow(output, output2));
        }
        else if(classList === 'e'){
            printOutput((Math.E * output));
        }
        else if(classList === '|x|'){
            if(output < 0){
                printOutput(output);
            }
        }
        else if(classList === 'sinInverse'){
            printOutput((1/Math.sin(output)));
        }
        else if(classList === 'cosInverse'){
            printOutput((1/Math.cos(output)));
        }
        else if(classList === 'tanInverse'){
            printOutput((1/Math.tan(output)));
        }
        else if(classList === '2^x'){
            printOutput(Math.pow(2, output));
        }
        else if(classList === 'x^3'){
            printOutput(Math.pow(output, 3));
        }
        else if(classList === 'x!'){
            function Factorial(n) { 
                var ans=1;  
                for (var i = 2; i <= n; i++) 
                    ans = ans * i; 
                return ans; 
            }
            printOutput(Factorial(output))
        }
        else if(classList === 'pi' || document.querySelector('.imgpi')){
            printOutput((Math.PI*(output)));
        }
        else{
            return;
        }
        
    }
}


for(const sciCal of document.querySelectorAll('.operator_s')){
    sciCal.addEventListener('click', SciCal);
}
