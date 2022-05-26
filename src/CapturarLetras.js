//recibe las letras del usuario y las compara con la de la palabra seleccionada
const gameBoard = document.querySelector('#display-juego');
function captureLetras(e) {
    const letraInput = e.key;
    const letra = letraInput.toUpperCase();
    ProcesarLetra(letra);
}

function CaptureEKeyboard(event){
    let keyPress = event.target.textContent;
    console.log(keyPress);
    ProcesarLetra(keyPress);
}

function ProcesarLetra(letra){
    if((!letrasCorrectas.includes(letra))&&(!letrasUsadas.includes(letra)) && (/[a-zA-Z]/).test(letra)){
        let existeLetra = false;

        arrLetras = document.querySelectorAll('.letra');
        let lgth = arrLetras.length;
        let index = 0;
        
        arrLetras.forEach(element => {
            let guiones = document.querySelectorAll('.guion');
            if (element.textContent === letra) {
                // element.classList.remove('guion');
                element.classList.remove('hidden');
                let guion = guiones[index];
                guion.classList.add('hidden');
                existeLetra = true;
                counterCorrectas++;
                letrasCorrectas.push(letra);
            }
            // if(counterCorrectas==lgth){
            //     JugadorGana(palabra);
            // }
            index++;
        });
        if(counterCorrectas==lgth){
            JugadorGana(palabra);
        }
        if (!existeLetra) {
            if (counterErrores < 8) {
                counterErrores++;
                dibujar(counterErrores);
                letrasUsadas.push(letra);
                ListaLetras(letra);
            }
            if(counterErrores === 8){
                console.log('Perdiste!');
                jugadorPierde(palabra);

            }
            existeLetra = false;
        }
    }
    else{
        const msj = document.querySelector('#letra-ya-usada');
        console.log('Ya usaste esta letra');
        MostrarMensaje(msj);
    }
}