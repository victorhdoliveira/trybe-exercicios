// 1 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

let elementoH1 = document.createElement('h1');
elementoH1.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementoH1);

// 2 🚀 Adicione a tag main com a classe main-content como filho da tag body;
let elementoMain = document.createElement ('main');
elementoMain.className ='main-condent';
document.body.appendChild(elementoMain);

// 3 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
let elementoSection = document.createElement('section');
elementoSection.className = 'center-content';
elementoMain.appendChild(elementoSection);

// 4 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let elementoParagragh = document.createElement('p');
elementoParagragh.innerHTML = 'O objetivo desses exercícios é colocar em prática o que você acabou de aprender sobre DOM.'
elementoSection.appendChild(elementoParagragh);

// 5 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
let elementoSection2 = document.createElement('section');
elementoSection2.className = 'left-content';
elementoMain.appendChild(elementoSection2);

// 6 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
let elementoSection3 = document.createElement('section');
elementoSection3.className = 'right-content';
elementoMain.appendChild(elementoSection3);

// 7 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
let elementoImg = document.createElement('img');
elementoImg.className = 'small-image';
elementoImg.src = 'https://picsum.photos/200';
elementoSection2.appendChild(elementoImg);

// 8 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... 
//como valores da lista. Essa lista deve ser filha do section criado no passo 6;

let ul = document.createElement('ul');
elementoSection3.appendChild(ul)

let arrayUl = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez']

for (let index in arrayUl) {
let li = document.createElement('li');
li.innerHTML = arrayUl[index];
ul.appendChild(li);
}
//9 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 0; index < 3; index += 1){
let elementoH3 = document.createElement('h3');
elementoMain.appendChild(elementoH3);
}

// ---------------------------------------------------------------- //

// 1 🚀 Adicione a classe title na tag h1 criada;
elementoH1.className = 'title';

// 2 🚀 Adicione a classe description nas 3 tags h3 criadas;
let elementoH3 = document.querySelectorAll('h3')
for (let index = 0; index < 3; index += 1){
elementoH3[index].className = 'description'
}


// 3 🚀 Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
elementoMain.removeChild(elementoSection2);

// 4 🚀 Centralize a section criado no passo 6 (aquele que possui a classe right-content). 
//Dica: para centralizar, basta configurar o margin-right: auto da section;
elementoSection3.style.marginRight = "auto";


// 5 🚀 Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
elementoSection.style.backgroundColor = "green";

// 6 🚀 Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
ul.lastChild.remove();
ul.lastChild.remove();