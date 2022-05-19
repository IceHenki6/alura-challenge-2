
function JugadorGana(lgth){
    if(counterCorrectas === lgth){
        const mensajeGanador = document.getElementById('ganaste');
        gameBoard.classList.add('blur');
        mensajeGanador.classList.remove('hidden');
    }
}
