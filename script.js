let cartas; 
let count = 0;
let isOver = 0;
const gif_random = [];

do {
    cartas = prompt('Com quantas cartas deseja jogar?\nEscolha um número par '+
    'entre 4 e 14!');
} while ((cartas % 2 !== 0) || !(cartas >=4 && cartas <=14));

shufflegifs();

for(let i =0; i <cartas;i++) {
    let addCards = document.querySelector('article');
    addCards.innerHTML +=
    `<div class = "card" onclick="flip(this)">
     <div class= "content" onclick="fcount()"><img src="/imgs/front.png" alt="${i}"></div>
     <div class= "content back-face"><img src="/imgs/${gif_random[i]}.gif" alt="1"></div>
     </div>`;
}

function shufflegifs() {
    const gifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot']
    
    if(cartas) {
        gif_random[0] = gifs[0];
        gif_random[1] = gifs[0];
    
        gif_random[2] = gifs[1];
        gif_random[3] = gifs[1];
    
        if(cartas >=6) {
            gif_random[4] = gifs[2];
            gif_random[5] = gifs[2];
        }
        if(cartas >=8) {
            gif_random[6] = gifs[3];
            gif_random[7] = gifs[3];
        }
        if(cartas >=10) {
            gif_random[8] = gifs[4];
            gif_random[9] = gifs[4];
        }
        if(cartas >=12) {
            gif_random[10] = gifs[5];
            gif_random[11] = gifs[5];
        }
        if(cartas >=14) {
            gif_random[12] = gifs[6];
            gif_random[13] = gifs[6];
        }
    }

    function comparador() { 
        return Math.random() - 0.5; 
    } 

    gif_random.sort(comparador);
}

function flip(element) {
    element.querySelector('.content').classList.add('front-face');
    element.querySelector('.content.back-face').style.transform = 'rotateY(0deg)';

    element.querySelector('.content.back-face').classList.add('check');
    element.querySelector('.content').classList.add('check');


    let parent = document.querySelectorAll('.content.back-face.check');

    let parent2 = document.querySelectorAll('.content.front-face.check');
    
    if(count % 2 === 0) {
        setTimeout(function() {
            if(parent[0].innerHTML ===parent[1].innerHTML) {
                
                parent[0].classList.remove('check');
                parent[1].classList.remove('check'); 
                parent2[0].classList.remove('check');
                parent2[1].classList.remove('check');
                isOver++;
                if(isOver === cartas/2) {
                    alert(`Você ganhou em ${count} jogadas!`);
                }         
            } else {
                parent[0].style.transform = 'rotateY(180deg)'
                parent[0].classList.remove('check');
                
                parent2[0].style.transform = 'rotateY(0deg)'
                parent2[0].classList.remove('check');

                parent[1].style.transform = 'rotateY(180deg)'
                parent[1].classList.remove('check');
                parent2[1].style.transform = 'rotateY(0deg)'
                parent2[1].classList.remove('check');
        
            }
          }, 1000);

    }

    
       
}

function fcount() {
    count++      
}



