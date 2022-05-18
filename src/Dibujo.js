
const containerDibujo = document.querySelector('#dibujo');

let canvas = document.querySelector('.canvas');
canvas.width = 800;
canvas.height = 600;

function dibujarBase(){
    ctx.beginPath();
    ctx.strokeStyle = '#8a5f1a';
    ctx.moveTo(550, 550);
    ctx.lineTo(250, 550);
    ctx.lineWidth = 15;
    ctx.stroke();
}
let ctx = canvas.getContext("2d");


function dibujar(){
    counterErrores++;
    errors = counterErrores;
    let canvas = document.querySelector('.canvas');
    let ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = '#8a5f1a';
    ctx.lineWidth = 7;
    const xStickman = 420;

    switch(errors){
        case 1:
            ctx.moveTo(300,550);
            ctx.lineTo(300,100);
            ctx.stroke();
            break;
        case 2:
            ctx.moveTo(300,100);
            ctx.lineTo(420,100);
            ctx.stroke();
            break;
        case 3:
            ctx.moveTo(xStickman,100);
            ctx.lineTo(xStickman,150);
            ctx.stroke();
            break;
        case 4:
            //head
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.strokeStyle = '#787878';
            ctx.fillStyle = 'wheat';
            ctx.arc(xStickman,190,40,0, 2*Math.PI);
            ctx.fill();
            ctx.stroke();
            break;
        case 5:
            //body
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#787878';
            ctx.beginPath();
            ctx.moveTo(xStickman,230);
            ctx.lineTo(xStickman,380);
            ctx.stroke();
            break;
        case 6:
            //right leg
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#787878';
            ctx.moveTo(xStickman,380);
            ctx.lineTo(xStickman + 50,450);
            ctx.stroke();
            break;
        case 7:
            //left leg
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#787878';
            ctx.moveTo(xStickman,380);
            ctx.lineTo(xStickman-50,450);
            ctx.stroke();
            break;
        case 8:
            //right arm
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#787878';
            ctx.moveTo(xStickman,280);
            ctx.lineTo(xStickman+50,320);
            ctx.stroke();
            break
        case 9:
            //left arm
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#787878';
            ctx.moveTo(xStickman,280);
            ctx.lineTo(xStickman-50,320);
            ctx.stroke();
            break;
    }


}



