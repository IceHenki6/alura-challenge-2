const inputPalabra = document.getElementById('input-palabra');
const menuAgregarPalabra = document.querySelector('#agregar-palabra');
const btnAgregar = document.getElementById('btn-agregar');
function menuPalabra(){
    menuAgregarPalabra.classList.remove('hidden');
    btnJugar.classList.add('hidden');
    btnAgregarPalabra.classList.add('hidden');
}
function AgregarPalabra(){
    console.log(palabras);
    let newPalabra = inputPalabra.value;
    if((!palabras.includes(newPalabra.toUpperCase())) && (/[a-zA-Z]/).test(newPalabra)&&(newPalabra!='')){
        palabras.push(newPalabra.toUpperCase());
        console.log(palabras);
        menuAgregarPalabra.classList.add('hidden');
        btnJugar.classList.remove('hidden');
        btnAgregarPalabra.classList.remove('hidden');
    }

}

btnAgregar.addEventListener('click',AgregarPalabra);
btnAgregarPalabra.addEventListener('click',menuPalabra);
