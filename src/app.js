//inicio del programa principal del juego del ahorcado
//Seleccionar el menu principal y el logo
const menuPrincipal = document.querySelector('#menu');
const logo = document.querySelector('header');

//inicializar los contadores principales del juego
let counter = 0;
let counterErrores = 0;
let counterCorrectas = 0;
let letrasUsadas = [];
let letrasCorrectas = [];
let palabras = ['LIBERTAD','MOTOR','COMPUTADORA','SISTEMA','SOFTWARE','PROGRAMACION','HERRAMIENTA','AUTO','INGENIERIA','ESTUDIAR','DEDICACION','ORACLE','IMAGINACION','MATEMATICAS','MECANICA','PROCESADOR','LIBRO','UNIVERSIDAD','AVION'];
let palabra ='';


//funcion principal del juego
function juegoDelAhorcado(){
    logo.classList.add('hidden');
    const game = document.getElementById('game');
    game.classList.remove('hidden');
    
    //si se encuentra en un dispositivo mobile o tablet, se crea un teclado virtual
    if(existeTeclado){
        const keyboard = document.getElementById('container-teclado');
        keyboard.classList.remove('ocultar-teclado');
        keyboard.classList.add('mostrar-teclado');
    }


    counterErrores = 0;
    counterCorrectas = 0;
    

    if(counter!=0){
        cleanBoard();
        dibujarBase();
    }
    dibujarBase();
    createLista();
    
    counter++;
    console.log(counter);

    //si el usuario agrega manualmente una palabra, será la palabra asignada para el primer juego
    //sino se selecciona aleatoriamente una palabra
    if(palabraAgregada){
        palabra = palabras[palabras.length-1];
        console.log(palabra);
        letrasEnPantalla(palabra);
        palabraAgregada = false;
    }
    else{
        palabra = seleccionarPalabra(palabras);
    }

    //Event listeners de pulsaciones de telcado o clicks en teclado virtual;
    window.addEventListener('keypress', captureLetras);

    if(existeTeclado){
        const containerTeclado = document.querySelector('#container-teclado');
        containerTeclado.addEventListener('click', CaptureEKeyboard);
    }
    

    //sale del juego si el usuario presiona 'Terminar Juego'
    btnTerminarJuego.addEventListener('click', function(){
        if(counter!=0){
            cleanBoard();
            counter = 0;
            game.classList.add('hidden');
            menuPrincipal.classList.remove('hidden');
            logo.classList.remove('hidden');
            EsconderTeclado();
        }
    });
    //
}


//funcion que selecciona las palabras de manera aleatoria
function seleccionarPalabra(arrPalabras) {
    const randPalabra = arrPalabras[Math.floor(Math.random() * arrPalabras.length)];

    // const longitud = randPalabra.length;

    letrasEnPantalla(randPalabra);
    return randPalabra;
}



const btnJugar = document.querySelector('#play');
const btnAgregarPalabra = document.querySelector('#add-palabra');
const btnNuevoJuego = document.querySelector('#nuevo-juego');
const btnTerminarJuego = document.querySelector('#terminar-juego');



btnNuevoJuego.addEventListener('click', juegoDelAhorcado);
btnJugar.addEventListener('click',function(){
    menuPrincipal.classList.add('hidden');
    juegoDelAhorcado();
});

