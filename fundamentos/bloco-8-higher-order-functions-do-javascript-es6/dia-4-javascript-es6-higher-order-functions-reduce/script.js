//1
// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
// const flatten = arrays.reduce((acc, curr) => acc.concat(curr))
// console.log(flatten)

//2
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

2
const reduceNames = books.reduce((acc, curr) => `${acc} ${curr.author.name};`, '')
console.log(reduceNames)

3
function avgName() {
  const booksQtd = books.length;
  const sumAge = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0)
  return sumAge / booksQtd;
} 
console.log(avgName())

// const avgName = books.reduce((acc, curr) => acc + (curr.releaseYear - curr.author.birthYear), 0)
// const bookqtd = books.length;



//4

const longestNamedBook = books.reduce((acc, curr) => {
  if (curr.name.length > acc.name.length){
    return curr
  }
  return acc
})
console.log(longestNamedBook)

//5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = books.reduce((acc, curr) => acc + curr.split('').reduce((a, c) => {
  if (c === 'a' || c === 'A') return a + 1;
  return a
},0),0);
