const telaInicio = document.getElementById('inicio');
const preJogo = document.getElementById('pre_jogo');
const InvViral = document.getElementById('pre_invasao_viral');

const inputNome = document.getElementById('playerName');
const btnIniciar = document.getElementById('btn-iniciar');
const btnComecar = document.getElementById('btn-comecar');
const btnJogar = document.getElementById('btn-jogar');

const nomeJogadorDisplay = document.getElementById('nomeJogadorDisplay');

let nomeJogador = '';

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

btnIniciar.addEventListener('click', SalvarAvançar);

mostrarTela(telaInicio);