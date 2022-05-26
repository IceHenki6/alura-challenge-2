const menuPrincipal = document.querySelector('#menu');
const logo = document.querySelector('header');
let counter = 0;
let counterErrores = 0;
let counterCorrectas = 0;
let letrasUsadas = [];
let letrasCorrectas = [];
let palabras = ['LIBERTAD', 'SEMPITERNO','COMPUTADORA','SISTEMA','SOFTWARE','PROGRAMACION','HERRAMIENTA','AUTO','INGENIERIA','ESTUDIAR','DEDICACION'];
let palabra ='';


//funcion principal del juego
function juegoDelAhorcado(){
    logo.classList.add('hidden');
    const game = document.getElementById('game');
    game.classList.remove('hidden');
    
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


    palabra = seleccionarPalabra(palabras);

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

