
const containerDibujo = document.querySelector('#dibujo');
const arrDibujo = document.querySelectorAll('.img-dibujo');
let flagDibujo = false;
let positionDibujo = 0;
let dibujo = arrDibujo[0];

function dibujarBase(){
    dibujo = arrDibujo[0];
    dibujo.classList.remove('hidden');
}
function dibujar(){

    flagDibujo = true;
    counterErrores++;
    errors = counterErrores; 
    switch(errors){
        case 1:
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 2:
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 3:
            //head
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 4:
            //body
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 5:
            //right leg
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 6:
            //left leg
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 7:
            //right arm
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
        case 8:
            //left arm
            dibujo.classList.add('hidden');
            dibujo = arrDibujo[errors];
            dibujo.classList.remove('hidden');
            positionDibujo = errors;
            break;
    }


}

