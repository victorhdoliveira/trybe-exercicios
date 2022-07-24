//1
let fatorial = 1;

for (let index = 10; index > 0; index -= 1){
    fatorial *= index;
}

console.log(fatorial);

//2

let word = 'tryber';
let reverse =  '';

for (let index = word.length - 1; index >= 0; index -= 1){
    reverse += word[index]
}

console.log (reverse)

//3

let numbers = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = numbers[0];
let menorPalavra = numbers [0];

for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index].length > maiorPalavra.length){
        maiorPalavra = numbers[index];
    }
}
console.log(maiorPalavra);

for (let index = 0; index < numbers.length; index +=1){
    if (numbers[index].length < menorPalavra.length){
        menorPalavra = numbers[index];

    }
}

console.log(menorPalavra);

//4


//Bonus
let n = 5;
let ast = '*';
let sqr = '';

//1

for (let index = 0; index < n; index += 1){
    sqr += ast
}

for (let index = 0; index < n; index += 1){
    console.log(sqr)
}

//2

for (let index = 0; index < n; index += 1){
    sqr += ast
console.log(sqr)
}

//3

