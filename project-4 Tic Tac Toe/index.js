const gameCells = document.querySelectorAll('.game_cell');
const btn = document.getElementById('btn');
const ptag = document.querySelector('.p_tag');
let gameLive = true;
let gameNext = true;

const handlewin = (e) =>{
    gameLive = false;
    ptag.innerHTML = `${e}_is won!`;
    console.log(e);
}
const gameStatus = () =>{
    const top_left = gameCells[0].classList[2];
    const top_middle = gameCells[1].classList[2];
    const top_right = gameCells[2].classList[2];
    const middle_left = gameCells[3].classList[2];
    const middle_middle = gameCells[4].classList[2];
    const middle_right = gameCells[5].classList[2];
    const bottom_left = gameCells[6].classList[2];
    const bottom_middle = gameCells[7].classList[2];
    const bottom_right = gameCells[8].classList[2];
    
    // top_left
    if(top_left && top_left === top_middle && top_left === top_right){
        handlewin(top_left);        
        gameCells[0].classList.add('won');
        gameCells[1].classList.add('won');
        gameCells[2].classList.add('won');      
    }
    else if(top_left && top_left === middle_left && top_left === bottom_left){
        handlewin(top_left);
        gameCells[0].classList.add('won');
        gameCells[3].classList.add('won');
        gameCells[6].classList.add('won');
    }
    else if(top_left && top_left === middle_middle && top_left === bottom_right){
        handlewin(top_left);
        gameCells[0].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[8].classList.add('won');
    }
    // top_middle
    else if(top_middle && top_middle === top_left && top_middle === top_right){
        handlewin(top_middle);
        gameCells[1].classList.add('won');
        gameCells[0].classList.add('won');
        gameCells[2].classList.add('won');
    }
    else if(top_middle && top_middle === middle_middle && top_middle === bottom_middle){
        handlewin(top_middle);
        gameCells[1].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[7].classList.add('won');
    }
    // top_right
    else if(top_right && top_right === top_middle && top_right === top_left){
        handlewin(top_right);
        gameCells[2].classList.add('won');
        gameCells[1].classList.add('won');
        gameCells[0].classList.add('won');
    }
    else if(top_right && top_right === middle_right && top_right === bottom_right){
        handlewin(top_right);
        gameCells[2].classList.add('won');
        gameCells[5].classList.add('won');
        gameCells[8].classList.add('won');
    }
    else if(top_right && top_right === middle_middle && top_right === bottom_left){
        handlewin(top_right);
        gameCells[2].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[6].classList.add('won');
    }
    // middle_left
    else if(middle_left && middle_left === top_left && middle_left === bottom_right){
        handlewin(middle_left);
        gameCells[3].classList.add('won');
        gameCells[0].classList.add('won');
        gameCells[6].classList.add('won');
    }
    else if(middle_left && middle_left === middle_middle && middle_left === middle_right){
        handlewin(middle_left);
        gameCells[3].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[5].classList.add('won');
    }
    // middle_middle
    else if(middle_middle && middle_middle === middle_left && middle_middle === middle_right){
        handlewin(middle_middle);
        gameCells[4].classList.add('won');
        gameCells[3].classList.add('won');
        gameCells[5].classList.add('won');
    }
    else if(middle_middle && middle_middle === top_middle && middle_middle === bottom_middle){
        handlewin(middle_middle);
        gameCells[4].classList.add('won');
        gameCells[1].classList.add('won');
        gameCells[7].classList.add('won');
    }
    else if(middle_middle && middle_middle === top_left && middle_middle === bottom_right){
        handlewin(middle_middle);
        gameCells[4].classList.add('won');
        gameCells[0].classList.add('won');
        gameCells[8].classList.add('won');
    }
    else if(middle_middle && middle_middle === top_right && middle_middle === bottom_left){
        handlewin(middle_middle);
        gameCells[4].classList.add('won');
        gameCells[2].classList.add('won');
        gameCells[6].classList.add('won');
    }
    // bottom_left
    else if(bottom_left && bottom_left === middle_left && bottom_left === top_left){
        handlewin(bottom_left);
        gameCells[6].classList.add('won');
        gameCells[3].classList.add('won');
        gameCells[6].classList.add('won');
    }
    else if(bottom_left && bottom_left === middle_middle && bottom_left === top_right){
        handlewin(bottom_left);
        gameCells[6].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[2].classList.add('won');
    }
    else if(bottom_left && bottom_left === bottom_middle && bottom_left === bottom_right){
        handlewin(bottom_left);
        gameCells[6].classList.add('won');
        gameCells[7].classList.add('won');
        gameCells[8].classList.add('won');
    }
    // bottom_middle
    else if(bottom_middle && bottom_middle === bottom_left && bottom_middle === bottom_right){
        handlewin(bottom_middle);
        gameCells[7].classList.add('won');
        gameCells[6].classList.add('won');
        gameCells[8].classList.add('won');
    }
    else if(bottom_middle && bottom_middle === middle_middle && bottom_middle === top_middle){
        handlewin(bottom_middle);
        gameCells[7].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[1].classList.add('won');
    }
    // bottom_right
    else if(bottom_right  && bottom_right === bottom_middle && bottom_right === bottom_left){
        handlewin(bottom_right);
        gameCells[8].classList.add('won');
        gameCells[7].classList.add('won');
        gameCells[6].classList.add('won');
    }
    else if(bottom_right  && bottom_right === middle_middle && bottom_right === top_left){
        handlewin(bottom_right);
        gameCells[8].classList.add('won');
        gameCells[4].classList.add('won');
        gameCells[0].classList.add('won');
    }
    else if(bottom_right  && bottom_right === middle_right && bottom_right === top_right){
        handlewin(bottom_right);
        gameCells[8].classList.add('won');
        gameCells[5].classList.add('won');
        gameCells[2].classList.add('won');
    }
    else if(top_left && top_middle && top_right && middle_left && middle_middle && middle_right && bottom_left && bottom_middle && bottom_right){
        gameLive = false;
        ptag.innerHTML = "NoOne Win The Match!"
    }
}    

const HandlegameCell = (event) =>{
    // console.log(event.target);
    // console.log(event.target.classList);
    if(gameLive){
        const location = event.target.classList[1];
        //console.log(location);

        if(event.target.classList[2] === 'x' || event.target.classList[2] === 'o'){
            return;
        }
        if(gameNext){
            event.target.classList.add('x');
            gameStatus();
            gameNext = !gameNext;
        }
        else{
            event.target.classList.add('o');
            gameStatus();
            gameNext = !gameNext;
        }

    }
    
}
for(const gameCell of gameCells){
    //console.log(gameCell);
    gameCell.addEventListener('click', HandlegameCell);
}
const reset = ()=>{
    gameNext = true;
    gameLive = true;
    for(const gameCell of gameCells){
        gameCell.classList.remove('x');
        gameCell.classList.remove('o');
        gameCell.classList.remove('won');
    }
    ptag.innerHTML = '_ is won!'
}
btn.addEventListener('click', reset);
