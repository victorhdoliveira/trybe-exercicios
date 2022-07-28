// 🚀 Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const elementoH1 = document.createElement('h1');
elementoH1.innerHTML = "Exercício 5.2 - JavaScript DOM";
document.body.appendChild(elementoH1);

// 🚀 Adicione a tag main com a classe main-content como filho da tag body;
const elementoMain = document.createElement ('main');
elementoMain.className ='main-condent';
document.body.appendChild(elementoMain);

// 🚀 Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const elementoSection = document.createElement('section');
elementoSection.className = 'center-content';
elementoMain.appendChild(elementoSection);

// 🚀 Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
// 🚀 Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
// 🚀 Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
// 🚀 Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
// 🚀 Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
// 🚀 Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
