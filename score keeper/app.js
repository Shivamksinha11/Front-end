const p1Button=document.querySelector('#p1Button');
const p2Button=document.querySelector('#p2Button');
const resetButton=document.querySelector("#reset");
const P1Display=document.querySelector("#p1Display");
const P2Display=document.querySelector("#p2Display");
const winningScoreSelect=document.querySelector("#playTo");


let p1Score=0;
let p2Score=0;
let winningScore=3;
let isGameOver=false;

p1Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p1Score+=1;
        P1Display.innerText=p1Score;
        if(p1Score===winningScore)
        {
            isGameOver=true;
            P1Display.classList.add('winner');
            P2Display.classList.add('loser');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }
    }
})

p2Button.addEventListener('click',function(){
    if(!isGameOver)
    {
        p2Score+=1;
        P2Display.innerText=p2Score;
        if(p2Score===winningScore)
        {
            isGameOver=true;
            P1Display.classList.add('loser');
            P2Display.classList.add('winner');
            p1Button.disabled=true;
            p2Button.disabled=true;
        }     
    }
})

winningScoreSelect.addEventListener('change',function(){
    winningScore=parseInt(this.value);
    reset();
})


resetButton.addEventListener('click', reset)

function reset(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    P1Display.innerText=0;
    P2Display.innerText=0;
    P1Display.classList.remove('winner','loser');
    P2Display.classList.remove('winner','loser'); /*('has-text-success','has-text-danger')-----in bulma if you dont want to use css class.*/
    p1Button.disabled=false;   /*in bulma*/
    p2Button.disabled=false;   /*in bulma*/
}
