import { iniciarLogicaVF } from './caca_mitos.js';
import { iniciarLogicaQuiz } from './quiz.js';


const telaInicio = document.getElementById('inicio');
const preJogo = document.getElementById('pre_jogo');
const tituloJogoHud = document.getElementById('titulo_jogo');
const telaFinal = document.getElementById('tela-final');

const inputNome = document.getElementById('playerName');
const inputSerie = document.getElementById('serie-select');
const btnIniciar = document.getElementById('btn-iniciar');
const btnComecar = document.getElementById('btn-comecar');
const btnJogarNovamente = document.getElementById('btn-jogar-novamente');

const hud = document.getElementById('hud');
const cronometroDisplay = document.getElementById('cronometro_display');
const placarDisplay = document.getElementById('placar'); 
const nomeJogadorDisplay = document.getElementById('nomeJogadorDisplay');

const placarFinalDisplay = document.getElementById('placar-final-display');
const tempoFinalDisplay = document.getElementById('tempo-final-display');
const listaRankingDisplay = document.getElementById('lista-ranking');


let nomeJogador = '';
let serieJogador = '';
let pontuacao = 0;
let cronometroInterval;
let tempoInicio = 0;
let tempoPausado = 0;
let faseAtual = -1;

const playlistFase = [
    {
        nome: 'Caça Mitos',
        idPreTela: 'pre_caca_mitos',
        idJogo: 'caca_mitos',
        iniciarLogica: iniciarLogicaVF,
    },
    {
        nome: 'Quiz',
        idPreTela: 'pre_quiz',
        idJogo: 'quiz',
        iniciarLogica: iniciarLogicaQuiz,
    },
];

function mostrarTela(telaParaMostrar) {
    document.querySelectorAll('.js-tela').forEach(tela => {
        if(tela) tela.style.display = 'none';
    });
    if(telaParaMostrar) telaParaMostrar.style.display = 'grid';
}
function mostrarHud() { if(hud) hud.style.display = 'flex'; }
function esconderHud() { if(hud) hud.style.display = 'none'; }

function iniciarCronometro() { 
    if (cronometroInterval) return; 
    tempoInicio = Date.now() - tempoPausado; 
    cronometroInterval = setInterval(atualizarDisplay, 50); 
}
function pausarTempo() { 
    clearInterval(cronometroInterval); 
    cronometroInterval = null; 
    if (tempoInicio > 0) { 
        tempoPausado = Date.now() - tempoInicio; 
    } 
}
function atualizarDisplay() { 
    const tempoDecorrido = Date.now() - tempoInicio; 
    if (cronometroDisplay) cronometroDisplay.textContent = formatarTempo(tempoDecorrido); 
}
function formatarTempo(milissegundos) { 
    const minutos = String(Math.floor(milissegundos / 60000)).padStart(2, '0'); 
    const segundos = String(Math.floor((milissegundos % 60000) / 1000)).padStart(2, '0'); 
    const ms = String(Math.floor((milissegundos % 1000) / 10)).padStart(2, '0'); 
    return `${minutos}:${segundos}.${ms}`; 
}

function carregarRanking() {
    const rankingEmTexto = localStorage.getItem('rankingJogoHPV');
    return rankingEmTexto ? JSON.parse(rankingEmTexto) : [];
}

function salvarRanking(ranking) {
    const rankingEmTexto = JSON.stringify(ranking);
    localStorage.setItem('rankingJogoHPV', rankingEmTexto);
}

function SalvarAvançar() { 
    nomeJogador = inputNome.value;
    serieJogador = inputSerie.value;
    if (nomeJogador.trim() === '' || serieJogador.trim() === '') {
        alert('Por favor, preencha seu nome e sua série!');
        return;
    }
    nomeJogadorDisplay.textContent = nomeJogador;
    mostrarTela(preJogo);
}

function irParaJogo() {
    faseAtual = -1;
    pontuacao = 0;
    atualizarPlacar(0);
    tempoPausado = 0;
    avancarFase();
}

export function avancarFase() {
    pausarTempo();
    faseAtual++;

    if (faseAtual >= playlistFase.length) {
        finalizarJogo();
        return;
    }

    const proximaFaseInfo = playlistFase[faseAtual];
    const telaTransicao = document.getElementById(proximaFaseInfo.idPreTela);
    const botaoPronto = telaTransicao.querySelector('.button');
    const tituloTransicao = telaTransicao.querySelector('.titulo h2');

    if (tituloTransicao) tituloTransicao.textContent = proximaFaseInfo.nome;
    
    mostrarTela(telaTransicao);

    botaoPronto.addEventListener('click', () => {
        const telaDoJogo = document.getElementById(proximaFaseInfo.idJogo);
        tituloJogoHud.textContent = proximaFaseInfo.nome;
        
        mostrarHud();
        mostrarTela(telaDoJogo);
        iniciarCronometro();
        
        proximaFaseInfo.iniciarLogica(avancarFase);
    }, { once: true });
}

function finalizarJogo() {
    esconderHud();
    pausarTempo(); 

    const runAtual = {
        nome: nomeJogador,
        pontos: pontuacao,
        tempoMs: tempoPausado,
        serie: serieJogador
    };

    const ranking = carregarRanking();
    ranking.push(runAtual);

    ranking.sort((runA, runB) => {
        if (runB.pontos !== runA.pontos) {
            return runB.pontos - runA.pontos;
        }
        return runA.tempoMs - runB.tempoMs;
    });

    const rankingFinal = ranking.slice(0, 10);
    salvarRanking(rankingFinal);
    mostrarTelaFinal(runAtual, rankingFinal);
}

function mostrarTelaFinal(runAtual, ranking) {
    placarFinalDisplay.textContent = runAtual.pontos;
    tempoFinalDisplay.textContent = formatarTempo(runAtual.tempoMs);

    listaRankingDisplay.innerHTML = '';

    ranking.forEach((run, index) => {
        const itemDoRanking = document.createElement('div');
        itemDoRanking.className = 'ranking-item';
        itemDoRanking.innerHTML = `
            <span class="posicao">${index + 1}º</span>
            <span class="nome">${run.nome} (${run.serie})</span>
            <span class="pontos">${run.pontos} PTS</span>
            <span class="tempo">${formatarTempo(run.tempoMs)}</span>
        `;
        listaRankingDisplay.appendChild(itemDoRanking);
    });
    
    mostrarTela(telaFinal);
}

export function atualizarPlacar(valor) {
    pontuacao += valor;
    placarDisplay.textContent = `Pontuação: ${pontuacao}`;
}

export function embaralharArray(array) {
    const arrayCopy = [...array];
    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }
    return arrayCopy;
}

btnIniciar.addEventListener('click', SalvarAvançar);
btnComecar.addEventListener('click', irParaJogo);
btnJogarNovamente.addEventListener('click', () => {
    location.reload();
});

esconderHud();
mostrarTela(telaInicio);