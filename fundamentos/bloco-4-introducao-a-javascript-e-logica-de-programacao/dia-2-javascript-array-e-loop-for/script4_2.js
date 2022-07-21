let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//2

let sum = 0;
for (let index=0; index < numbers.length; index += 1) {
    sum += numbers[index];
}
console.log(sum);

//3

let media = sum / numbers.length;
console.log(media);

//4

if (media > 20) {
    console.log ("valor maior que 20");
}
else {
    console.log ("valor menor ou igual a 20");
} 

//5
//console.log(Math.max.apply(null, numbers));

let maiorN = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorN) {
      maiorN = numbers[index];
    }
  }
  
  console.log(maiorN);
  
//6

let impar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0); {
        impar += 1;
    }
}
    if (impar === 0) {
        console.log ('nenhum valor ímpar encontrado')
    } else {
    console.log (impar);
}

//7

let menorN = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorN) {
      menorN = numbers[index];
    }
  }
  console.log(menorN);
  
//8

let lista = []
for (let index = 1; index < 26; index +=1){
    lista.push(index);
}
console.log (lista);

//9
let div2 = 1/2
for (let index = 0; index < lista.length; index += 1) {
    lista[index]*div2 }