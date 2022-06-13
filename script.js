let prato;
let bebida;
let sobremesa;
let precoTotal;


// Mostra o prato, bebida e sobremesa escolhida
function escolher(pedido) {
    let selecionado = pedido;

    // Escolher o prato
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

    // Escolher a bebida
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

    // Escolher a sobremesa
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

// Deixa o ícone da opção escolhida visível/invisível
function ativaIcone (iconeDoPedido, classe) {
    let iconeJaClicado;
    let icone = iconeDoPedido.querySelector(".preco ion-icon");

    if (classe === "pratos") {
        iconeJaClicado = document.querySelector(".pratos .iconeEscolhido");
    } else if (classe === "bebidas") {
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


// Ativa/desativa o botão de fechar o pedido
function ativaBotaoContinuar() {
    prato = document.querySelector(".pratos .escolhido");
    bebida = document.querySelector(".bebidas .escolhido");
    sobremesa = document.querySelector(".sobremesas .escolhido");

    let botao = document.querySelector(".botao-finalizar");
    let mudarTexto = document.querySelector(".botao-finalizar button");

    if (prato !== null && bebida !== null && sobremesa !== null) {
        botao.classList.add("concluirPedido");
        mudarTexto.innerHTML = "Fechar pedido";
    } else {
        botao.classList.remove("concluirPedido");
        mudarTexto.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }
}


// Mostra/esconde a tela de confirmação do pedido
// e atualiza as opções e preços dos items escolhidos
function validarPedido() {

    if (document.querySelector(".concluirPedido") !== null) {

        // Pedido feito
        prato = document.querySelector(".pratos .escolhido h2").innerHTML;
        bebida = document.querySelector(".bebidas .escolhido h2").innerHTML;
        sobremesa = document.querySelector(".sobremesas .escolhido h2").innerHTML;

        let precoPrato = document.querySelector(".pratos .escolhido h4").innerHTML;
        let precoBebida = document.querySelector(".bebidas .escolhido h4").innerHTML;
        let precoSobremesa = document.querySelector(".sobremesas .escolhido h4").innerHTML;


        // Confirmação do pedido feito
        let confirmarPrato = document.querySelector(".pedido .prato h5");
        confirmarPrato.innerHTML = prato;
        let confirmarBebida = document.querySelector(".pedido .bebida h5");
        confirmarBebida.innerHTML = bebida;
        let confirmarSobremesa = document.querySelector(".pedido .sobremesa h5");
        confirmarSobremesa.innerHTML = sobremesa;

        let confirmarPratoPreco = document.querySelector(".pedido .prato p");
        confirmarPratoPreco.innerHTML = precoPrato;
        let confirmarBebidaPreco = document.querySelector(".pedido .bebida p");
        confirmarBebidaPreco.innerHTML = precoBebida;
        let confirmarSobremesaPreco = document.querySelector(".pedido .sobremesa p");
        confirmarSobremesaPreco.innerHTML = precoSobremesa;


        // Calcula o preço de cada prato e o total
        precoPrato = Number(precoPrato.replace("R$ ","").replace(",","."));
        precoBebida = Number(precoBebida.replace("R$ ","").replace(",","."));
        precoSobremesa = Number(precoSobremesa.replace("R$ ","").replace(",","."));

        precoTotal = Number(precoPrato + precoBebida + precoSobremesa).toFixed(2);
        precoTotal = precoTotal.replace(".",",");


        // Confirmação do preço total
        let confirmarPrecoTotal = document.querySelector(".telaConcluirPedido .pedido .total p");
        confirmarPrecoTotal.innerHTML = `R$ ${precoTotal}`;


        // Mostra a tela de confirmação do pedido
        let telaConcluirPedido = document.querySelector(".telaConcluirPedido");
        let body = document.querySelector("body");

        telaConcluirPedido.classList.remove("none");
        body.classList.add("scrollNone");
    }
}


// Cancela o pedido e volta à tela de opções
function cancelar() {
    let telaConcluirPedido = document.querySelector(".telaConcluirPedido");
    let body = document.querySelector("body");

    telaConcluirPedido.classList.add("none");
    body.classList.remove("scrollNone");
}


// Envia a mensagem pelo Whatsapp
function enviarMensagem() {
    let nome = prompt("Qual é o seu nome? ");
    let endereco = prompt("Qual é o seu enredeço? ");

    if (nome === null || nome === '') {
        nome = "Não inserido";
    }
    if (endereco === null || endereco === '') {
        endereco = "Não inserido";
    }

    let mensagem = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${prato}
    - Bebida: ${bebida}
    - Sobremesa: ${sobremesa}
    Total: R$ ${precoTotal}

    Nome: ${nome}
    Endereço: ${endereco}`);

    const a = document.querySelector(".telaConcluirPedido a");

    a.href=`https://wa.me/5531997777333?text=${mensagem}`;
}
