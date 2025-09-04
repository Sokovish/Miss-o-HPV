import {bancoVerdadeiroFalso} from "./dados.js"
import { avancarFase, atualizarPlacar, embaralharArray} from "./main.js";

const areaPergunta = document.getElementById('area_pergunta_mitos')
const buttonTrue = document.getElementById('button_true')
const buttonFalse = document.getElementById('button_false')
const feedbackContainer = document.getElementById('feedback-vf-container');

let perguntaAtual = 0;
let perguntasPartida = [];

const totalPerguntas = 10;

export function iniciarLogicaVF() {
    console.log("Iniciando fase: Verdadeiro ou Falso");

    const bancoEmbaralhado = embaralharArray([...bancoVerdadeiroFalso]);
    
    perguntasPartida = bancoEmbaralhado.slice(0, totalPerguntas);
    perguntaAtual = 0;

    mostrarPergunta();
}


function mostrarPergunta(){
    feedbackContainer.innerHTML = '';

    if (perguntaAtual >= totalPerguntas) {
        avancarFase();
        return;
    }
    const pergunta = perguntasPartida[perguntaAtual];

    areaPergunta.textContent = pergunta.afirmacao;

    buttonTrue.disabled = false;
    buttonFalse.disabled = false;
}

function checarResposta(respostaJogador) {
    buttonTrue.disabled = true;
    buttonFalse.disabled = true;

    const perguntaCorreta = perguntasPartida[perguntaAtual].resposta;

    if (respostaJogador === perguntaCorreta) {
        atualizarPlacar(50);
        feedbackContainer.innerHTML = `<p class="feedback-vf feedback-certo">Certa Resposta! ✅</p>`;
    } else {
        atualizarPlacar(-50);
        feedbackContainer.innerHTML = `<p class="feedback-vf feedback-errado">Resposta Errada! ❌</p>`;
    }

    perguntaAtual++;
    setTimeout(mostrarPergunta, 700);
}

buttonTrue.addEventListener('click', () => checarResposta(true));
buttonFalse.addEventListener('click', () => checarResposta(false));

