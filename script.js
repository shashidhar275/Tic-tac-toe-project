let music = new Audio("music.mp3");
let turn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let spin = 'X'
let isgameover = false;
let winner;

let changeTurn = function (){
    return spin === 'X'? '0':'X'; 
}

const checkWin = function(){
    let string = '';
    let boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((element)=>{
        if(element.innerText === '')
        {
            string += ' ';
        }
        else{
            string += element.innerText;
        }
    });
    console.log(string);

    if(((string[0]===string[3]) && (string[3]===string[6]) && string[0]!=' ') 
    || ((string[1]===string[4]) && (string[4]===string[7]) && string[1]!=' ') 
    || ((string[2]===string[5]) && (string[5]===string[8]) && string[2]!=' ')
    || ((string[0]===string[1]) && (string[1]===string[2]) && string[0]!=' ')
    || ((string[3]===string[4]) && (string[4]===string[5]) && string[3]!=' ')
    || ((string[6]===string[7]) && (string[7]===string[8]) && string[6]!=' ')
    || ((string[0]===string[4]) && (string[4]===string[8]) && string[0]!=' ')
    || ((string[2]===string[4]) && (string[4]===string[6]) && string[2]!=' ')
    )
    {
        winner = spin === 'X'? '0':'X';
        document.querySelector('.info').innerText = winner + ' won.';
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px'
        isgameover = true;
        return;
    }
    isgameover = false;
}

// music.play();

//Game Logic 
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = spin;
            spin = changeTurn();
            turn.play();
            let result = checkWin();
            if(isgameover==false)
            {
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + spin ;
            }
            else{
                document.querySelector('.info').innerText = winner + ' won.';
            }
        }
    })
});

document.querySelector('#reset').addEventListener('click',()=>{
    boxtext = document.getElementsByClassName('boxtext');
    Array.from(boxtext).forEach((element)=>{
        element.innerText = '';
    })
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
    spin = 'X';
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + spin ;
})



