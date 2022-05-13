
const container = document.querySelector('#container-letras');



function letrasEnPantalla(longitud){
    const containerGuiones = document.createElement('div');
    containerGuiones.id = 'display-letras';
    container.appendChild(containerGuiones);

    for(let i = 0; i<longitud;i++){
        let guion = document.createElement('div');
        guion.classList.add('guion');
        containerGuiones.appendChild(guion);
    }
}

function cleanBoard(){
    let letras = document.querySelector('#display-letras');
    letras.remove();
}