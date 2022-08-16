//Parte I

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

// Parte II

//1

const factorial = (n) => n > 1 ? n* factorial(n - 1) : 1
console.log(factorial(4))

//2

const longestWord = (phrase) => {
    const biggestLength =  phrase.split(' ').sort((a, b) => b.length - a.length)[0]
    console.log(biggestLength)
}
longestWord("Viver é partir voltar e repartir")

//3
const countBtn = document.getElementById('btn')
const clickCount = document.getElementById('clicks')
let count = 0

countBtn.addEventListener("click", () => {clickCount.innerHTML = ++count})

//4

const substituaX = (nome) => {
  let frase = "Tryber x aqui!"
  const novaFrase = frase.replace(/x/g, nome)
  return novaFrase
}

const minhasSkills = (str) => {
  const skills = ["HTML", "CSS", "JavaScript"]
  let phrase = `${str}\nMinhas três principais habilidades são: ${skills[0]}, ${skills[1]} e ${skills[2]}`
  console.log (phrase)
}
minhasSkills(substituaX('bebeto'))

