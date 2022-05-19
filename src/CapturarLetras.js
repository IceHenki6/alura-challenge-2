//recibe las letras del usuario y las compara con la de la palabra seleccionada
const gameBoard = document.querySelector('#display-juego');
function captureLetras(e) {
    const letraInput = e.key;
    const letra = letraInput.toUpperCase();
    console.log((/[a-zA-Z]/).test(letra))
    if((!letrasCorrectas.includes(letra))&&(!letrasUsadas.includes(letra)) && (/[a-zA-Z]/).test(letra)){
        let existeLetra = false;
        console.log(letra);

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
            JugadorGana(lgth);
            index++;
        });
    
        if (!existeLetra) {
            if (counterErrores < 9) {
                dibujar();
                letrasUsadas.push(letra);
                ListaLetras(letra);
            }else{
                console.log('Perdiste!');
            }
            existeLetra = false;
        }
    }
    else{
        console.log('Ya usaste esta letra');
    }
}