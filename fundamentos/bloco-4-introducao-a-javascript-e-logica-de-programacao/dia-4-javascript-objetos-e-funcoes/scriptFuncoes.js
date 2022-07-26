// 1
// let word = 'arara';
// let reverse = word.split('').reverse().join('');

// function palindromo () {
//    if (word === reverse) {
//     return true
//    } else {
//     return false
//    }
// }

// console.log(reverse)
// console.log(palindromo(word))

// 2

// function indiceMaior (numeros) {
//     let maior = 0;
//     for (let index in numeros){
//         if (numeros[maior] < numeros[index]){
//         maior = index
//         }
    
// }
//     console.log(maior)
// }

// (indiceMaior([2, 3, 6, 7, 10, 1]));

//3

// function indiceMenor(numeros){
//     let menor = 0;
//     for (let index in numeros){
//     if (numeros[menor] > numeros[index]){
//         menor = index
//     }
// }
// console.log(menor)
// }
// indiceMenor([2, 4, 6, 7, 10, 0, -3])

//4

// function qtdC (nomes){
//     let major = nomes[0];
//     for (let index in nomes){
//         if (major.length < nomes[index].length){
//         major = nomes[index]
//     }
// }
//return(major)
// }
// qtdC(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

//5

function rep (inteiros){
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0

    for (let index in inteiros){
        let verificaNumero = inteiros[index]
        for (let index2 in inteiros){
            if (verificaNumero === interios[index2]){
                contNumero += 1;
            }
        }
        if (contNumero > contRepetido){
            contRepetido = contNumero;
            indexNumeroRepetido = index
        }
        contNumero = 0
    }
    return inteiros[indexNumeroRepetido]
}

console.log(rep([2, 3, 2, 5, 8, 2, 3]))