//recibe las letras del usuario y las compara con la de la palabra seleccionada
function captureLetras(e) {
    const letra = e.key;
    let existeLetra = false;
    console.log(letra);
    arrLetras = document.querySelectorAll('.letra');

    let index = 0;

    arrLetras.forEach(element => {
        let guiones = document.querySelectorAll('.guion');
        if (element.textContent === letra) {
            // element.classList.remove('guion');
            element.classList.remove('hidden');
            let guion = guiones[index];
            guion.classList.add('hidden');
            existeLetra = true;
        }
        index++;
    });

    if (!existeLetra) {
        if (counterErrores < 9) {
            console.log('err: ' + counterErrores);
            dibujar();
        }
        existeLetra = false;
    }
}