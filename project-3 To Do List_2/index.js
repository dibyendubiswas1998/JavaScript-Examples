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
        var div1 = document.createElement('div');
        document.getElementById('element_list').appendChild(div1);
        div1.setAttribute('class', 'segments');
        div1.setAttribute('id', 'segments');
        // For Input1:----------
        var li_1 = document.createElement('li');
        var span_1 = document.createElement('span');
        var ul_1 = document.createElement('ul');
        ul_1.setAttribute('class', 'list');
        ul_1.appendChild(li_1);
        li_1.appendChild(span_1);
        div1.appendChild(ul_1);
        span_1.textContent = Inp1.value.trim();
        Inp1.value = '';SetSuccess(Inp1);
        // For Input2:----------
        var li_2 = document.createElement('li');
        var span_2 = document.createElement('span');
        var ul_2 = document.createElement('ul');
        ul_2.setAttribute('class', 'list');
        ul_2.appendChild(li_2);
        li_2.appendChild(span_2);
        div1.appendChild(ul_2);
        span_2.textContent = Inp2.value.trim();
        Inp2.value = '';SetSuccess(Inp2);
        // For Input3:----------
        var li_3 = document.createElement('li');
        var span_3 = document.createElement('span');
        var ul_3 = document.createElement('ul');
        ul_3.setAttribute('class', 'list');
        ul_3.appendChild(li_3);
        li_3.appendChild(span_3);
        div1.appendChild(ul_3);
        span_3.textContent = Inp3.value.trim();
        Inp3.value = '';SetSuccess(Inp3);
        // For Option:----------
        var li_4 = document.createElement('li');
        var span_4 = document.createElement('span');
        var ul_4 = document.createElement('ul');
        ul_4.setAttribute('class', 'list');
        ul_4.appendChild(li_4);
        li_4.appendChild(span_4);
        div1.appendChild(ul_4);
        if(Option.options[Option.selectedIndex].text === 'Python'){
            span_4.textContent = 'Python';
        }
        else if(Option.options[Option.selectedIndex].text === 'Machine Learning'){
            span_4.textContent = 'Machine Learning';
        }
        else if(Option.options[Option.selectedIndex].text === 'Deep Learning'){
            span_4.textContent = 'Deep Learning';
        }
        else if(Option.options[Option.selectedIndex].text === 'Javascript'){
            span_4.textContent = 'Javascript';
        }
        else if(Option.options[Option.selectedIndex].text === 'React Js'){
            span_4.textContent = 'React Js';
        }SetSuccess(Option);
        var input = document.createElement('input');
        var i = document.createElement('i');
        input.setAttribute('type', 'checkbox');
        input.setAttribute('name', 'checkbox');
        i.setAttribute('class', "fas fa-trash-alt");
        div1.appendChild(input);div1.appendChild(i);
        
        const Check = ()=>{
            ul_1.classList.toggle('checked1');
            ul_2.classList.toggle('checked1');
            ul_3.classList.toggle('checked1');
            ul_4.classList.toggle('checked1');
            li_1.classList.toggle('checked2');
            li_2.classList.toggle('checked2');
            li_3.classList.toggle('checked2');
            li_4.classList.toggle('checked2');
        }
        const Delete = ()=>{
            div1.remove();
        }
        if(div1){
            const checkBox = div1.lastChild.previousSibling; 
            checkBox.onclick = function CheckFun(){
                Check();
                if(checkBox.checked){
                    console.log('ok');
                    i.setAttribute('id', 'delete');
                    document.getElementById('delete').addEventListener('dblclick',(e)=>{
                        e.preventDefault();
                        Delete()});
                }
                else{
                    i.removeAttribute('id', 'delete');
                }
            }               
        }   
        
    }
});

