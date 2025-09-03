import { iniciarLogicaVF } from './caca_mitos.js';
import { iniciarLogicaQuiz } from './quiz.js';


const telaInicio = document.getElementById('inicio');
const preJogo = document.getElementById('pre_jogo');
const tituloJogoHud = document.getElementById('titulo_jogo')

const inputNome = document.getElementById('playerName');
const inputSerie = document.getElementById('serie-select');
const btnIniciar = document.getElementById('btn-iniciar');
const btnComecar = document.getElementById('btn-comecar');

const cronometroDisplay = document.getElementById('cronometro_display');
const placar = document.getElementById('placar');
const nomeJogadorDisplay = document.getElementById('nomeJogadorDisplay');

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

// --- FUNÇÕES DE CONTROLE ---
function mostrarTela(telaMostrar) {
    document.querySelectorAll('.js-tela').forEach(tela => {
        tela.style.display = 'none';
    });
    telaMostrar.style.display = 'grid';
}
function mostrarHud() { hud.style.display = 'flex'; }
function esconderHud() { hud.style.display = 'none'; }


// --- FUNÇÕES DO CRONÔMETRO (Já estavam boas!) ---
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
    cronometroDisplay.textContent = formatarTempo(tempoDecorrido);
}
function formatarTempo(milissegundos) {
    const minutos = String(Math.floor(milissegundos / 60000)).padStart(2, '0');
    const segundos = String(Math.floor((milissegundos % 60000) / 1000)).padStart(2, '0');
    const ms = String(Math.floor((milissegundos % 1000) / 10)).padStart(2, '0');
    return `${minutos}:${segundos}.${ms}`;
}

// --- FUNÇÕES DE FLUXO ---
function SalvarAvançar() { 
    nomeJogador = inputNome.value;
    serieJogador = inputSerie.value;
    if (nomeJogador.trim() === '') {
        alert('Por favor, insira seu nome');
        return;
    }
    if(serieJogador.trim() === '') {
        alert('Por favor, selecione sua serie');
        return;
    }
    nomeJogadorDisplay.textContent = nomeJogador;
    mostrarTela(preJogo);
}

function irParaJogo() {
    faseAtual = -1;
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

    if (tituloTransicao) {
        tituloTransicao.textContent = proximaFaseInfo.nome;
    }
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
    console.log("JOGO FINALIZADO!");
    // Lógica da tela final
}

export function atualizarPlacar(valor) {
    pontuacao += valor;
    placar.textContent = `Pontuação: ${pontuacao}`;
}

// --- CONECTANDO OS BOTÕES INICIAIS ---
btnComecar.addEventListener('click', () => irParaJogo());
btnIniciar.addEventListener('click', () => SalvarAvançar());



// --- INICIALIZAÇÃO DA PÁGINA ---
esconderHud();
mostrarTela(telaInicio);