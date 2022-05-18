const ctnerDbj = document.querySelector('#display-juego');

function createLista(){
    const cntnerList = document.createElement('div');
    const txt = document.createElement('p');
    txt.textContent = 'Letras Usadas: ';
    cntnerList.classList.add('letras-usadas');
    cntnerList.appendChild(txt);
    ctnerDbj.appendChild(cntnerList);
    const ul = document.createElement('ul');
    ul.classList.add('list');
    cntnerList.appendChild(ul);
}


function ListaLetras(ltr){
    const ul = document.querySelector('.list');

    const li = document.createElement('li');

    ul.appendChild(li);

    li.textContent = ltr;

}


