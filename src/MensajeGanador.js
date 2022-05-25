const mensajeGanador = document.querySelector('#ganaste');
mensajeGanador.classList.add('hidden');
let finDelJuego = false;

function JugadorGana(word){
    gameBoard.classList.add('blur');
    mensajeGanador.classList.remove('hidden');
    const txtPalabraCorrecta = document.createElement('h3');
    txtPalabraCorrecta.id = 'palabra-correcta';
    txtPalabraCorrecta.textContent = word;
    mensajeGanador.appendChild(txtPalabraCorrecta);
    finDelJuego=true;

}

function jugadorPierde(word){
    const jugadorPierde = document.getElementById('perdiste');
    jugadorPierde.classList.remove('hidden');
    gameBoard.classList.add('blur');
    const txtPalabraCorrecta = document.createElement('h3');
    txtPalabraCorrecta.id = 'palabra-correcta';
    txtPalabraCorrecta.textContent = word;
    jugadorPierde.appendChild(txtPalabraCorrecta);
    finDelJuego = true;
}
