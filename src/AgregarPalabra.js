const inputPalabra = document.getElementById('input-palabra');
const menuAgregarPalabra = document.querySelector('#agregar-palabra');
const btnAgregar = document.getElementById('btn-agregar');
let palabraAgregada = false;
function menuPalabra(){
    menuAgregarPalabra.classList.remove('hidden');
    btnJugar.classList.add('hidden');
    btnAgregarPalabra.classList.add('hidden');
}
function AgregarPalabra(){
    let newPalabra = inputPalabra.value;
    if((!palabras.includes(newPalabra.toUpperCase())) && (/[a-zA-Z]/).test(newPalabra)&&(newPalabra!='')&&(newPalabra.length<50)&&!(/[0-9]/).test(newPalabra)){
        palabras.push(newPalabra.toUpperCase());
        menuAgregarPalabra.classList.add('hidden');
        btnJugar.classList.remove('hidden');
        btnAgregarPalabra.classList.remove('hidden');
        palabraAgregada = true;
        const msgAgregada = document.getElementById('palabra-agregada');
        MostrarMensaje(msgAgregada);
    }
    else if(palabras.includes(newPalabra.toUpperCase())){
        const msg1 = document.getElementById('verificar-existe-palabra');
        MostrarMensaje(msg1);
    }
    else if(!((/[a-zA-Z]/).test(newPalabra))){
        const msg2 = document.getElementById('verificar-input');
        MostrarMensaje(msg2);
    }
    else if(((/[0-9]/).test(newPalabra))){
        const msg2 = document.getElementById('verificar-input');
        MostrarMensaje(msg2);
    }
    else{
        const msg3 = document.getElementById('verificar-input-length')
        MostrarMensaje(msg3);
    }
    inputPalabra.value = '';
}

btnAgregar.addEventListener('click',AgregarPalabra);
btnAgregarPalabra.addEventListener('click',menuPalabra);
