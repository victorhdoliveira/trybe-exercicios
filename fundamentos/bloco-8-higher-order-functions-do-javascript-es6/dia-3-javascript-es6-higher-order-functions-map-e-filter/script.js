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
  
// 1

const formatedBookNames = books.map(({ name, genre, author}) => `${name} - ${genre} - ${author.name}`);
console.log(formatedBookNames)

//2
const nameAndAge = books.map((book) => (
    {age: book.releaseYear - book.author.birthYear,
    author: book.author.name}
)
).sort((a, b) => a.age - b.age);
console.log(nameAndAge)

//3
const fantasyOrScienceFiction = books.filter((book) => book.genre === 'Ficção Científica' ||  book.genre === 'Fantasia')
console.log(fantasyOrScienceFiction);

//4
const oldBooksOrdered = books.filter((book) => book.releaseYear < 1962).sort((a, b) => a.releaseYear - b.releaseYear)
console.log(oldBooksOrdered);

//5
const fantasyOrScienceFictionAuthors = books.filter((book) => 
(book.genre === 'Ficção Científica' ||  book.genre === 'Fantasia')).map((book) => book.author.name).sort()
console.log(fantasyOrScienceFictionAuthors)

//6
const oldBooks = books.filter((book) => book.releaseYear < 1962).map((book) => book.name);
console.log(oldBooks);

//7
const authorWith3DotsOnName = books.find((book) => book.author.name.split(' ').filter((letter) => letter.endsWith('.')).length === 3).author.name
console.log(authorWith3DotsOnName)