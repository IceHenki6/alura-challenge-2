console.log('Hello world');
let counter = 0;

//funcion principal del juego
function juegoDelAhorcado(){
    let salir = false;
    let palabras = ['LIBERTAD', 'SEMPITERNO','COMPUTADORA','SISTEMA','SOFTWARE','PROGRAMACION','HERRAMIENTA','AUTO','INGENIERIA','ESTUDIAR','DEDICACION'];

    if(counter!=0){
        cleanBoard();
    }

    counter++;
    console.log(counter);
    //funcion que selecciona las palabras de manera aleatoria
    function seleccionarPalabra(arrPalabras){
        const randPalabra = arrPalabras[Math.floor(Math.random()*arrPalabras.length)];

        console.log(randPalabra);
        // const longitud = randPalabra.length;

        letrasEnPantalla(randPalabra);
        return randPalabra;
    }


    const palabra = seleccionarPalabra(palabras);

    //recibe las letras del usuario y las compara con la de la palabra seleccionada
    window.addEventListener('keypress', function(e){
        const letra = e.key;
        console.log(letra);
        arrLetras = document.querySelectorAll('.letra');

        let index = 0;
        arrLetras.forEach(element => {
            let guiones = document.querySelectorAll('.guion');
            if(element.textContent===letra){
                // element.classList.remove('guion');
                element.classList.remove('hidden');
                let guion = guiones[index];
                guion.classList.add('hidden');
            }
            index++;
        });
 
    });

    //sale del juego si el usuario presiona 'Terminar Juego'
    btnTerminarJuego.addEventListener('click', function(){
        if(counter!=0){
            cleanBoard();
            counter = 0;
        }

        salir = true;
    });

    if(salir){
        return;
    }
}

const btnNuevoJuego = document.querySelector('#nuevo-juego');
const btnTerminarJuego = document.querySelector('#terminar-juego');

btnNuevoJuego.addEventListener('click', juegoDelAhorcado);





