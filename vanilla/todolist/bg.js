const bodyTag = document.querySelector('body');

function paintbg(){
    const img = document.createElement('img');
    const randomNum = Math.floor(Math.random()*4)+1;

    img.src = `images/image${randomNum}.jpg`;
    img.classList.add('bg')

    bodyTag.appendChild(img)
}

function init(){
    paintbg();
}
init()