let button=document.querySelectorAll('button');
const screen=document.querySelector('input');
let screenValue='';
for(btn of button)
{
    btn.addEventListener('click',function(e){
        let buttonText=e.target.innerText;
        
        if(buttonText=='C')
        {
            screenValue='';
            screen.value=screenValue;
        }
        else if(buttonText=='=')
        {
            screen.value=eval(screenValue);
        }
        else
        {
            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}