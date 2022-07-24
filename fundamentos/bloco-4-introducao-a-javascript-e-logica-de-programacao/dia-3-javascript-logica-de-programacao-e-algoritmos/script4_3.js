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

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = array[0];
let menorPalavra = array [0];

for (let index = 0; index < array.length; index += 1){
    if (array[index].length > maiorPalavra.length){
        maiorPalavra = array[index];
    }
}
console.log(maiorPalavra);

for (let index = 0; index < array.length; index +=1){
    if (array[index].length < menorPalavra.length){
        menorPalavra = array[index];

    }
}

console.log(menorPalavra);

//4

