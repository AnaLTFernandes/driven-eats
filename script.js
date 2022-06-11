
function escolher(pedido) {
    let selecionado = pedido;

    if (document.querySelector(".pratos").contains(pedido)) { 
        let jaClicado = document.querySelector(".pratos .escolhido");
        if (jaClicado !== null) {
            jaClicado.classList.remove("escolhido");
            
        }
        if (jaClicado !== selecionado) {
            selecionado.classList.add("escolhido");
        }

        ativaIcone(pedido,"pratos");
        ativaBotaoContinuar();
    }

    if (document.querySelector(".bebidas").contains(pedido)) { 
        let jaClicado = document.querySelector(".bebidas .escolhido");
        if (jaClicado !== null) {
            jaClicado.classList.remove("escolhido");
            
        }
        if (jaClicado !== selecionado) {
            selecionado.classList.add("escolhido");
        }

        ativaIcone(pedido,"bebidas");
        ativaBotaoContinuar();
    } 

    if (document.querySelector(".sobremesas").contains(pedido)) { 
        let jaClicado = document.querySelector(".sobremesas .escolhido");
        if (jaClicado !== null) {
            jaClicado.classList.remove("escolhido");
            
        }
        if (jaClicado !== selecionado) {
            selecionado.classList.add("escolhido");
        }

        ativaIcone(pedido,"sobremesas");
        ativaBotaoContinuar();
    } 
}


function ativaIcone (iconeDoPedido, classe) {
    let iconeJaClicado;
    let icone = iconeDoPedido.querySelector(".preco ion-icon");

    if (classe == "pratos") {
        iconeJaClicado = document.querySelector(".pratos .iconeEscolhido");
    } else if (classe == "bebidas") {
        iconeJaClicado = document.querySelector(".bebidas .iconeEscolhido");
    } else {
        iconeJaClicado = document.querySelector(".sobremesas .iconeEscolhido");
    }

    if (iconeJaClicado !== null) {
        iconeJaClicado.classList.remove("iconeEscolhido");
    }
    if (iconeJaClicado !== icone) {
        icone.classList.add("iconeEscolhido");
    }
}


function ativaBotaoContinuar() {
    let prato = document.querySelector(".pratos .iconeEscolhido");
    let bebida = document.querySelector(".bebidas .iconeEscolhido");
    let sobremesa = document.querySelector(".sobremesas .iconeEscolhido");

    let botao = document.querySelector(".botao-finalizar");

    if (prato !== null && bebida !== null && sobremesa !== null) {
        botao.classList.add("concluirPedido");
    } else if (botao !== null) {
        botao.classList.remove("concluirPedido");
    }
}