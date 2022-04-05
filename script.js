let cartas; 

do {
    cartas = prompt('Com quantas cartas deseja jogar?');
} while ((cartas % 2 !== 0) || !(cartas >=4 && cartas <=14));


let addCards = document.querySelector('article');
for(let i =0; i <cartas;i++) {
    addCards.innerHTML +=
    `<div class = "card">
     <div class= "content" onclick="teste(this)"><img src="/imgs/front.png" alt="${i}"></div>
     <div class= "content back-face"><img src="/imgs/bobrossparrot.gif" alt="${i}"></div>
     </div>`;
}