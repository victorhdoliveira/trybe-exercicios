//1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); 
});

//2
const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4,5,6))

//3

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;


// <!-- Retornos esperados: -->
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

//4

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
  ];

  const { bornIn, nationality } = people;
  const filterPeople = people.filter(({ nationality, bornIn}) => nationality === 'Australian' && bornIn > 1900 && bornIn < 2001)
  console.log(filterPeople)

//5
const myList = [5, 2, 3]
const swap = myList => [3, 2, 5];
console.log(swap())

//6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ( [model, brand, year] ) => ({ model, brand, year })
console.log(toObject(palio))
console.log(toObject(shelbyCobra))
console.log(toObject(chiron))

//7
const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
  ];

  const shipLength = (({ name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`)
  
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'

  //8
  const greet = (person, greeting = 'Hi') => `${greeting} ${person}`;
  console.log(greet('John')) // 'Hi John'
  console.log(greet('John', 'Good morning')) // 'Good morning John'
  console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'

  //9
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

const { spring, summer, autumn, winter} = yearSeasons
const monthsOftheYear = [...spring, ...summer, ...autumn, ...winter]
console.log(monthsOftheYear)

