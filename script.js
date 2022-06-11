let prato;
let bebida;
let sobremesa


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
        prato = document.querySelector(".escolhido h2");
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
        bebida = document.querySelector(".escolhido h2");
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
        sobremesa = document.innerH;
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
    prato = document.querySelector(".pratos .escolhido");
    bebida = document.querySelector(".bebidas .escolhido");
    sobremesa = document.querySelector(".sobremesas .escolhido");

    let botao = document.querySelector(".botao-finalizar");
    let mudarTexto = document.querySelector(".botao-finalizar button");

    if (prato !== null && bebida !== null && sobremesa !== null) {
        botao.classList.add("concluirPedido");
        mudarTexto.innerHTML = "Fechar pedido";
    } else if (botao !== null) {
        botao.classList.remove("concluirPedido");
        mudarTexto.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}


function enviarMensagem() {

    if (document.querySelector(".concluirPedido") !== null) {
        prato = document.querySelector(".pratos .escolhido h2").innerHTML;
        bebida = document.querySelector(".bebidas .escolhido h2").innerHTML;
        sobremesa = document.querySelector(".sobremesas .escolhido h2").innerHTML;

        let precoPrato = document.querySelector(".pratos .escolhido .preco h4").innerHTML;
        let precoBebida = document.querySelector(".bebidas .escolhido .preco h4").innerHTML;
        let precoSobremesa = document.querySelector(".sobremesas .escolhido .preco h4").innerHTML;

        precoPrato = precoPrato.replace("R$ ","").replace(",",".");
        precoBebida = precoBebida.replace("R$ ","").replace(",",".");
        precoSobremesa = precoSobremesa.replace("R$ ","").replace(",",".");
        
        precoPrato = Number(precoPrato);
        precoBebida = Number(precoBebida);
        precoSobremesa = Number(precoSobremesa);

        let precoTotal = Number(precoPrato + precoBebida + precoSobremesa).toFixed(2);

        const nome = prompt("Qual é o seu nome? ");
        const endereco = prompt("Qual é o seu enredeço? ");

        let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${prato}
        - Bebida: ${bebida}
        - Sobremesa: ${sobremesa}
        Total: R$ ${precoTotal}

        Nome: ${nome}
        Endereço: ${endereco}`);

        const a = document.querySelector(".botao-finalizar a");

        a.href=`https://wa.me/5531993029525?text=${mensagem}`;
    }
}