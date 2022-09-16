const card = document.querySelectorAll('.slides');
const next = document.querySelector('.next__btn');
const prev = document.querySelector('.previous__btn');
let posicao = 0;

slideShow();

function slideShow(){
    for(let i = 1; i<card.length ; i++){
    card[i].style.cssText = 'display:none';
}

    next.onclick = function(){
        
        posicao++;
        
        if(posicao >= card.length){
            posicao = 0;
        }
        if(posicao < card.length){
        }
        console.log(posicao);
        card[posicao].style.cssText = 'display:block';
    }

    prev.onclick = function(){
        posicao--;
        if(posicao < 0){
            posicao = 4;
        }
        console.log(posicao);
        card[posicao].style.cssText = 'display:block';
    }
}
