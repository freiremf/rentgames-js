function alterarStatus(opt) {
    let elemento = document.getElementById(`game-${opt}`);
    let botao = elemento.querySelector("a");

    alterarCor(botao);
    alterarTexto(botao);
}

function alterarCor(botao) {
    if(botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.classList.add('dashboard__item__button');
    } else {
        botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button', 'dashboard__item__button--return');
    }
}

function alterarTexto(botao) {
    if(botao.innerHTML === "Alugar") {
        botao.innerHTML = "Devolver";
    } else {
        botao.innerHTML = "Alugar";
    }
}