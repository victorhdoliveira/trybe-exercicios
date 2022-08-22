//forEach

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
  };
  
  emailListInData.forEach(showEmailList)


// Find
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((match) => match % 3 === 0 && match % 5 === 0)
} 

console.log(findDivisibleBy3And5())

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find((match) => match.length == 5)
  }

console.log(findNameWithFiveLetters())

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id) {
     return musicas.find((match) => match.id === id)
  }
  
  console.log(findMusic('31031686'))

// Some
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
   return arr.some((match) => match === name) 
}

console.log(hasName(names2, 'Ana'))

// Every
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (arr, minimumAge) => {
    return arr.every((match) => match.age >= minimumAge)
  }
  
  console.log(verifyAges(people, 18));

// Sort

people.sort((a, b) => a.age - b.age); // Crescente

people.sort((a, b) => b.age - a.age); // Decrescente
  
console.log(people);