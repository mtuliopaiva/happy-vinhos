const card = document.querySelectorAll('.slides');
const btn = document.querySelectorAll('.btn');
const cabecalho = document.querySelectorAll('.cabecalho__link');
let tam = card.length;
let posicao = 0;




    // PRIMEIRO PLANO A SER MOSTRADO
card[posicao].style.cssText = ' opacity: 1;' + 
'height: auto;';

btn.forEach( botao => {
    botao.addEventListener('click', () => {
        const next = botao.classList.contains("next__btn");
        resetPlanos();
        if(next){
            // console.log("Direita"); Testando o botao selecionado
            posicao++;
        }
        else{
            // console.log("Esquerda"); Testando o botao selecionado
            posicao--;
        }

        if(posicao >=tam){
            posicao=0;
        }
        if(posicao <0){
            posicao = tam-1;
        }
        // console.log(posicao); Teste da posicao selecionada
        card[posicao].style.cssText =  ' opacity: 1;' + 
        'height: auto;'  + 
        'transition: opacity 0.5s ease-in;';
    })
    
})


function resetPlanos(){
    for(let i=0;i<tam;i++){
        // card[i].style.cssText = 'display:none';
        card[i].style.cssText = ' opacity: 0;' + 
        'height: 0;'  + 
        'transition: opacity 0.6s ease-in;';
    }
}


function scrollProdutos() {
    document.querySelector('.produtos__titulo').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollSobre() {
    document.querySelector('.sobre__titulo').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollDiferenciais() {
    document.querySelector('.diferenciais__titulo').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollPlanos() {
    document.querySelector('.planos__titulo').scrollIntoView({ 
        behavior: 'smooth'
    })
}
function scrollContato() {
    document.querySelector('.rodape__contato').scrollIntoView({ 
        behavior: 'smooth'
    })
}
