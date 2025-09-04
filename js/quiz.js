import {bancoQuiz} from "./dados.js"
import { avancarFase, atualizarPlacar, embaralharArray } from "./main.js";

const areaPergunta = document.getElementById('area_pergunta_quiz')
const alt1 = document.getElementById('alt1')
const alt2 = document.getElementById('alt2')
const alt3 = document.getElementById('alt3')
const alt4 = document.getElementById('alt4')


let perguntaAtual = 0;
let perguntasPartida = [];

const totalPerguntas = 10;

export function iniciarLogicaQuiz() {

    const bancoEmbaralhado = embaralharArray(bancoQuiz);
    
    perguntasPartida = bancoEmbaralhado.slice(0, totalPerguntas);
    perguntaAtual = 0;

    mostrarPergunta();

}

function mostrarPergunta(){
    if (perguntaAtual >= totalPerguntas) {
        avancarFase();
        return;
    }

    const pergunta = perguntasPartida[perguntaAtual];
    areaPergunta.textContent = pergunta.pergunta;

    const opcoes = pergunta.opcoes;
    const opcoesEmbaralhadas = embaralharArray(opcoes);

    alt1.textContent = opcoesEmbaralhadas[0];
    alt2.textContent = opcoesEmbaralhadas[1];
    alt3.textContent = opcoesEmbaralhadas[2];
    alt4.textContent = opcoesEmbaralhadas[3];

    const todosOsBotoes = [alt1, alt2, alt3, alt4];
    todosOsBotoes.forEach(botao => {
        botao.disabled = false;
        botao.style.backgroundColor = ''; // Reseta a cor do botão
   });
}

function checarResposta(respostaJogador) {
    alt1.disabled = true;
    alt2.disabled = true;
    alt3.disabled = true;
    alt4.disabled = true;

    const perguntaCorreta = perguntasPartida[perguntaAtual].resposta;
    const todosOsBotoes = [alt1, alt2, alt3, alt4];

    if (respostaJogador === perguntaCorreta) {
        atualizarPlacar(50);
    } else {
        atualizarPlacar(-50);
    }
    if (respostaJogador === perguntaCorreta) {
        atualizarPlacar(50);
        const botaoClicado = todosOsBotoes.find(btn => btn.textContent === respostaJogador);
        if (botaoClicado) botaoClicado.style.backgroundColor = '#1dd61d';
    } else {
        atualizarPlacar(-50);
        const botaoClicado = todosOsBotoes.find(btn => btn.textContent === respostaJogador);
        if (botaoClicado) botaoClicado.style.backgroundColor = '#d82b2b';
        
        const botaoCorreto = todosOsBotoes.find(btn => btn.textContent === perguntaCorreta);
        if (botaoCorreto) botaoCorreto.style.backgroundColor = '#1dd61d';
    }
    
    perguntaAtual++;
    setTimeout(mostrarPergunta, 1500);
}

alt1.addEventListener('click', () => checarResposta(alt1.textContent));
alt2.addEventListener('click', () => checarResposta(alt2.textContent));
alt3.addEventListener('click', () => checarResposta(alt3.textContent));
alt4.addEventListener('click', () => checarResposta(alt4.textContent));