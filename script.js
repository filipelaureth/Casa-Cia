const elemSlides = document.querySelector(".slider");
const elemsImagem = document.querySelectorAll(".slider img");
let indice = 0;
const tamanhoLista = elemsImagem.length - 1;

const atualizarCarrossel = () => {
    elemSlides.style.transform = `translateX(-${indice*100}%)`;
};

const incrementar = () => {
    indice++
    if(indice > tamanhoLista){
        indice = 0;
    }
};

setInterval(() => {
    incrementar()
    atualizarCarrossel()
}, 3500);


const elemPassador = document.querySelector(".passador");

const elemDiv0 = document.querySelector("#div00");
const elemDiv1 = document.querySelector("#div01");
const elemDiv2 = document.querySelector("#div02");

const botEsquerda = document.querySelector(".esquerda");
const botDireita = document.querySelector(".direita");
let indicador = 0
const tamanhoPassador = elemsImagem.length - 1;

botEsquerda.addEventListener("click", () => {
    indicador--;
    if(indicador < 0){
        indicador = tamanhoPassador;
    }
    console.log(indicador)
    atualizarPassador()
});
botDireita.addEventListener("click", () => {
    indicador++;
    if(indicador > tamanhoPassador){
        indicador = 0;
    }
    console.log(indicador)
    atualizarPassador()
});

const atualizarPassador = () => {
    switch(indicador){
        case 0:
            elemDiv0.style.display ="block";
            elemDiv1.style.display ="none";
            elemDiv2.style.display ="none";
        break
        case 1:
            elemDiv0.style.display ="none";
            elemDiv1.style.display ="block";
            elemDiv2.style.display ="none";
        break
        case 2:
            elemDiv0.style.display ="none";
            elemDiv1.style.display ="none";
            elemDiv2.style.display ="block";
        break
        default:
            console.log("erro");
    };
};