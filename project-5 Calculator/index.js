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
