let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1

for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}

//2

let sum = 0;
for (let index=0; index < numbers.length; index++) {
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
let maior = Math.max.apply(numbers)
for (let index=0; index < numbers.length; index++) {
    if (numbers[index] > maior); {
        maior = numbers[index];
    } 
}
console.log(maior)

//6
let par = 0;
let impar = 0;

for (let index=0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0);


    }
//else {
    //console.log ('nenhum valor ímpar encontrado');
//}