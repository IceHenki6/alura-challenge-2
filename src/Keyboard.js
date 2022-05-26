const keyRow1 = ['Q','W','E','R','T','Y','U','I','O','P'];
const keyRow2 = ['A','S','D','F','G','H','J','K','L','Ñ'];
const keyRow3 = ['Z','X','C','V','B','N','M'];
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
let existeTeclado = false;

function GenerarTeclado(){
    existeTeclado = true;

    for(let i=0; i<keyRow1.length;i++){
        const key = document.createElement('div');
        key.classList.add('key');
        const letra = document.createElement('p');
        letra.textContent = keyRow1[i];
        key.appendChild(letra);
        row1.appendChild(key);
    }

    for(let j=0; j<keyRow2.length;j++){
        const key = document.createElement('div');
        key.classList.add('key');
        const letra = document.createElement('p');
        letra.textContent = keyRow2[j];
        key.appendChild(letra);
        row2.appendChild(key);
    }

    for(let k=0; k<keyRow3.length;k++){
        const key = document.createElement('div');
        key.classList.add('key');
        const letra = document.createElement('p');
        letra.textContent = keyRow3[k];
        key.appendChild(letra);
        row3.appendChild(key);
    }
}

if(window.innerWidth<1200){
    GenerarTeclado();
}

function EsconderTeclado(){
    const keyboard = document.querySelector('#container-teclado');
    keyboard.classList.remove('mostrar-teclado');
    keyboard.classList.add('ocultar-teclado');
}
