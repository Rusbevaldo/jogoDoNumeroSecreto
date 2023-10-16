let numerosSorteados = [];
let numerosLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

mensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
    if(chute == numeroAleatorio){
        exibirTextoNaTela('h1', 'Parabéns');
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        let maiorOuMenor = chute > numeroAleatorio ? 'menor' : 'maior';
        exibirTextoNaTela('p', `O número é ${maiorOuMenor}`);
        limparCampo();
    }
    tentativas++;
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numerosLimite + 1);
    let quantidadeElementosLista = numerosSorteados.length;
    if(quantidadeElementosLista == numerosLimite){
        numerosSorteados =[];
    }
    if(numerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        numerosSorteados.push(numeroEscolhido);
        console.log(numerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}