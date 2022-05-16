console.log('Hello world');
let counter = 0;
let counterErrores = 0;

//funcion principal del juego
function juegoDelAhorcado(){
    dibujarBase();
    counterErrores = 0;

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
    console.log('Errores inicial: ' + counterErrores);


    window.addEventListener('keypress', captureLetras);

    //sale del juego si el usuario presiona 'Terminar Juego'
    btnTerminarJuego.addEventListener('click', function(){
        if(counter!=0){
            cleanBoard();
            counter = 0;
        }
    });
    //
}

const btnNuevoJuego = document.querySelector('#nuevo-juego');
const btnTerminarJuego = document.querySelector('#terminar-juego');

btnNuevoJuego.addEventListener('click', juegoDelAhorcado);


