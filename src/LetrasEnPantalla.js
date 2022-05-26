
const container = document.querySelector('#container-letras');



function letrasEnPantalla(word){

    const containerGuiones = document.createElement('div');
    containerGuiones.classList.add('display-letras');
    container.appendChild(containerGuiones);

    for(let i = 0; i<word.length;i++){
        let guion = document.createElement('div');
        let letra = document.createElement('p');
        letra.textContent = word[i];

        letra.classList.add('letra');
        letra.classList.add('hidden');
        guion.classList.add('guion');

        containerGuiones.appendChild(guion);
        containerGuiones.appendChild(letra);
    }
}

function cleanBoard(){
    const letras = document.querySelector('.display-letras');
    const lista = document.querySelector('.letras-usadas');
    const mensajeGanador = document.getElementById('ganaste');
    const jugadorPierde = document.getElementById('perdiste');
    const ultimoDibujo = document.getElementById(counterErrores);

    letras.remove();
    lista.remove();
    window.removeEventListener('keypress',captureLetras);
    letrasUsadas=[];
    letrasCorrectas=[];

    if(finDelJuego){
        const txtWord = document.querySelector('#palabra-correcta');
        txtWord.remove();
        finDelJuego = false;
    }

    mensajeGanador.classList.add('hidden');
    jugadorPierde.classList.add('hidden');
    gameBoard.classList.remove('blur');
    ultimoDibujo.classList.add('hidden');
    

    if (flagDibujo){
        dibujo.classList.add('hidden');
    }
}