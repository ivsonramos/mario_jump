const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const moeda = document.querySelector('.moeda');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}
/*
const contador = setInterval(() => {

console.log('contador')

    const moedaPosition = moeda.offsetLeft;

    if (moedaPosition <= 120 && marioPosition > 80 ){
        moeda.style.animation = 'none';
        
               
    } 
},5);
*/

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

        console.log(mario);
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png"
        mario.style.width = '75px'
        mario.style.marginLeft='50px'


        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);