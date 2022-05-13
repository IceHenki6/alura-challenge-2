console.log('Hello world');
let counter = 0;

//funcion principal del juego
function juegoDelAhorcado(){
    let salir = false;
    let palabras = ['LIBERTAD', 'SEMPITERNO','COMPUTADORA','SISTEMA','SOFTWARE','PROGRAMACION','HERRRAMIENTA','AUTO','INGENIERIA','ESTUDIAR','DEDICACION'];
    
    if(counter!=0){
        cleanBoard();
    }

    counter++;
    //funcion que selecciona las palabras de manera aleatoria
    function seleccionarPalabra(arrPalabras){
        let randPalabra = arrPalabras[Math.floor(Math.random()*arrPalabras.length)];

        console.log(randPalabra);
        const longitud = randPalabra.length;

        letrasEnPantalla(longitud);
        return randPalabra;
    }


    const palabra = seleccionarPalabra(palabras);

    //recibe las letras del usuario y las compara con la de la palabra seleccionada
    window.addEventListener('keypress', function(e){
        const letra = e.key;
        console.log(letra);

        for(let i = 0; i<palabra.length;i++){
            if(letra === palabra[i]){
                console.log(letra + ' en index ' + i);
                break;
            }
        }
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





