const Button = document.getElementById('btn');
function SetErrorMsg(input, erroMsg){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"; 
    small.innerText = erroMsg;
}
function SetSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
Button.addEventListener('click', (e)=>{
    e.preventDefault();
    const Inp1 = document.getElementById('inp1');
    const Inp2 = document.getElementById('inp2');
    const Inp3 = document.getElementById('inp3');
    const List = document.getElementById('list');
    const Option = document.getElementById('options');

    if(Inp1.value.trim() === ''){
        SetErrorMsg(Inp1, 'This field is required');
    }
    if(Inp2.value.trim() === ''){
        SetErrorMsg(Inp2, 'This field is required');
    }
    if(Inp3.value.trim() === ''){
        SetErrorMsg(Inp3, 'This field is required');
    }
    if(Option.options[Option.selectedIndex].text === 'Selects Courses'){
        SetErrorMsg(Option, 'This field is required');
    }
    if(Inp1.value.trim() != '' && Inp2.value.trim() != '' && Inp3.value.trim() != '' && Option.options[Option.selectedIndex].text != 'Selects Courses'){
        var li = document.createElement('li');
        var span = document.createElement('span');
        var i = document.createElement('i');
        var input = document.createElement('input');
        
        input.setAttribute('type', 'checkbox');
        input.setAttribute('id', 'checkbox');
        i.className = "fas fa-trash-alt";
        i.setAttribute('id', 'delete');
        var checkbox = document.getElementById('checkbox');
        li.appendChild(span);
        li.appendChild(input);
        li.appendChild(i);
        List.appendChild(li);
        if(Option.options[Option.selectedIndex].text === 'Python'){
            span.textContent = Inp1.value.trim() + '  ' + Inp2.value.trim() + '     ||      ' + Inp3.value.trim() + '     ||      ' + 'Python';
        }
        else if(Option.options[Option.selectedIndex].text === 'Machine Learning'){
            span.textContent = Inp1.value.trim() + '  ' + Inp2.value.trim() + '     ||      ' + Inp3.value.trim() + '     ||      ' + 'Machine Learning';
        }
        else if(Option.options[Option.selectedIndex].text === 'Deep Learning'){
            span.textContent = Inp1.value.trim() + '  ' + Inp2.value.trim() + '     ||      ' + Inp3.value.trim() + '     ||      ' + 'Deep Learning';
        }
        else if(Option.options[Option.selectedIndex].text === 'Javascript'){
            span.textContent = Inp1.value.trim() + '  ' + Inp2.value.trim() + '     ||      ' + Inp3.value.trim() + '     ||      ' + 'Javascript';
        }
        else if(Option.options[Option.selectedIndex].text === 'React Js'){
            span.textContent = Inp1.value.trim() + '  ' + Inp2.value.trim() + '     ||      ' + Inp3.value.trim() + '     ||      ' + 'React Js';
        }
        Inp1.value = '';
        Inp2.value = '';
        Inp3.value = '';
        SetSuccess(Inp1);
        SetSuccess(Inp2);
        SetSuccess(Inp3);
        SetSuccess(Option);
        //console.log(li);
        const Check = () =>{
            li.classList.toggle('checked');
        };
        const Delete = () =>{
            List.removeChild(li);
        };
        if(li){
            const checkBox = li.firstChild.nextSibling;
            const DeleteButton = li.lastChild;
            checkBox.onclick = function CheckFun(){
                Check();
                DeleteButton.addEventListener('click', (e)=>{
                    e.preventDefault();
                    Delete();
                })
            }
        }
        
    }
});

