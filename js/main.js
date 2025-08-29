const telaInicio = document.getElementById('inicio');
const preJogo = document.getElementById('pre_jogo');
const InvViral = document.getElementById('pre_invasao_viral');

const inputNome = document.getElementById('playerName');
const btnIniciar = document.getElementById('btn-iniciar');
const btnComecar = document.getElementById('btn-comecar');
const btnJogar = document.getElementById('btn-jogar');

const cronometroDisplay = document.getElementById('cronometro_display');

const nomeJogadorDisplay = document.getElementById('nomeJogadorDisplay');

let nomeJogador = '';

let cronometroInterval;
let tempoInicio = 0;
let tempoPausado = 0;

function mostrarTela(telaMostrar) {
    document.querySelectorAll('.js-tela').forEach(tela => {
        tela.style.display = 'none';
    });
    telaMostrar.style.display = 'grid';
}

const SalvarAvançar = () => { 
    nomeJogador = inputNome.value;
    if (nomeJogador.trim() === '') {
        alert('Por favor, insira seu nome');
        return;
    }

    nomeJogadorDisplay.textContent = nomeJogador;
    mostrarTela(preJogo);
}

function iniciarCronometro() {
    if (cronometroInterval) return;
    tempoInicio = Date.now();

    cronometroInterval = setInterval(atualizarDisplay, 50);
}

function pausarTempo() {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    tempoPausado = Date.now() - tempoInicio;
}

function atualizarDisplay (){
    tempoDecorrido = Date.now() - tempoInicio;

    cronometroDisplay.textContent = formatarTempo(tempoDecorrido);
    
}

function formatarTempo(milissegundos) {
    const minutos = String(Math.floor(milissegundos / 60000)).padStart(2, '0');
    const segundos = String(Math.floor(milissegundos % 60000 / 1000)).padStart(2, '0');
    const ms = String(Math.floor(milissegundos % 1000 / 10)).padStart(2, '0');
    
    return `${minutos}:${segundos}:${ms}`;
}

function pararCronometro() {
    clearInterval(cronometroInterval);
    cronometroInterval = null;
    cronometroDisplay.textContent = '00:00:000';
}


btnComecar.addEventListener('click', ()=> mostrarTela(InvViral));

mostrarTela(telaInicio);