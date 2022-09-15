const card = document.querySelectorAll('.slides');
const next = document.querySelector('.next__btn');
const prev = document.querySelector('.previous__btn');
var pos = '0';


card[pos].style.cssText = 'display:block;';

    next.onclick = function(){
        console.log("NEXT");
        card[0].style.cssText = 'display:none;';
        card[pos++].style.cssText = 'display:block;';
        
    }
    prev.onclick = function(){
        console.log("PREVIOUS");
    }

for(let i=0; i < card.length ; i++)
{
    console.log(card[i]);
}