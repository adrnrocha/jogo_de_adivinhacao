const numeroSecreto = gerarNumeroSecreto();
const maxTentativas = 10;
let tentativasRestantes = maxTentativas;

const obterElemento = (id) => document.getElementById(id);
const obterPalpiteInformado = () => parseInt(obterElemento('palpite').value);
const limparCampo = () => obterElemento('palpite').value = '';
const mostrarMensagem = (mensagem) => obterElemento('mensagem').textContent = mensagem;
const atualizarTentativas = () =>
    obterElemento('tentativasRestantes').textContent = `Tentativas restantes: ${tentativasRestantes}`;

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 100) + 1;
}

function verificarPalpite() {
    const palpite = obterPalpiteInformado();

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    for (let i = 0; i < 1; i++) {
        if (palpite === numeroSecreto) {
            mostrarMensagem("Você acertou! Parabéns!");
            desativarJogo();
        } else if (palpite < numeroSecreto) {
            mostrarMensagem("O número secreto é maior.");
        } else {
            mostrarMensagem("O número secreto é menor.");
        }

        tentativasRestantes--;
        atualizarTentativas();

        if (tentativasRestantes <= 0 && palpite !== numeroSecreto) {
            mostrarMensagem(`Você perdeu! O número secreto era ${numeroSecreto}.`);
            desativarJogo();
        }
    }

    limparCampo();
}

function desativarJogo() {
    obterElemento('palpite').disabled = true;
    document.querySelector('button').disabled = true;
}

atualizarTentativas();
