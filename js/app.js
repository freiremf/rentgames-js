function alterarStatus(opt) {
    let elemento = document.getElementById(`game-${opt}`);
    let imagem = elemento.querySelector('.dashboard__item__img');
    let botao = elemento.querySelector("a");
    let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        if(confirm("Deseja realmente devolver o jogo?")) {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.innerHTML = "Alugar";
            jogosAlugados--;
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.innerHTML = "Devolver"; 
        jogosAlugados++;   
    }
    console.log("Jogos alugados: ", jogosAlugados);
}