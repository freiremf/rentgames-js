function alterarStatus(opt) {
    let elemento = document.getElementById(`game-${opt}`);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector("a");

    alterarImg(imagem);
    alterarCor(botao);
    alterarTexto(botao);
}

function alterarCor(botao) {
    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
    } else {
        botao.classList.add('dashboard__item__button--return');
    }
}

function alterarTexto(botao) {
    if(botao.innerHTML === "Alugar") {
        botao.innerHTML = "Devolver";
    } else {
        botao.innerHTML = "Alugar";
    }
}

function alterarImg(imagem) {
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
    } else {
        imagem.classList.add('dashboard__item__img--rented');
    }
}