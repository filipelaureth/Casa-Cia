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
}, 4000);