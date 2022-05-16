
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
    let letras = document.querySelector('.display-letras');
    let board = document.querySelector('.canvas');
    ctx = board.getContext('2d');
    ctx.clearRect(0,0,board.width, board.height);
    letras.remove();
    window.removeEventListener('keypress',captureLetras);
}