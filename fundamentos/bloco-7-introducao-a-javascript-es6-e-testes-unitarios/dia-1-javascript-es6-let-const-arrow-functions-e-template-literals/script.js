//1
const testingScope = escopo => {
    if (escopo === true){
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope)
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)'
    console.log(elseScope)
  }
}

testingScope(true)

//2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (numbers) => {
    const order = numbers.sort((a, b) => a - b)
    return order;
};

sortOddsAndEvens(oddsAndEvens)

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

