import {bancoVerdadeiroFalso} from "./dados"
import { avancarFase, atualizarDisplay } from "./main";

const areaPergunta = document.getElementById('area_pergunta')
const buttonTrue = document.getElementById('button_true')
const buttonFalse = document.getElementById('button_false')

let perguntaAtual = 0;
let perguntasPartida = [];

const totalPerguntas = 5;

export function iniciarLogicaVF() {
    console.log("Iniciando fase: Verdadeiro ou Falso");

    const bancoEmbaralhado = [...bancoVerdadeiroFalso].sort(() => Math.random() - 0.5);
    
    perguntasPartida = bancoEmbaralhado.slice(0, totalPerguntas);
    perguntaAtual = 0;

    mostrarPergunta();
}


function mostrarPergunta(){
    if (perguntaAtual >= totalPerguntas) {
        avancarFase;
        return;
    }

    const pergunta = perguntasPartida[perguntaAtual];

    areaPergunta.textContent = pergunta.afirmacao;

    buttonTrue.disable = false;
    buttonFalse.disable = false;
}

function checarResposta(respostaJogador) {
    buttonTrue.disable = true;
    buttonFalse.disable = true;

    const perguntaCorreta = perguntasPartida[perguntaAtual].respota;

    if (respotaJogador === perguntaCorreta) {
        atualizarPlacar
    }
}
