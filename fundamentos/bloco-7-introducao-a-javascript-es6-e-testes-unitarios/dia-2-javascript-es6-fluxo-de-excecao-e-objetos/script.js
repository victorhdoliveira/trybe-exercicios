// Parte 2
// 1
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson
  const name =  order.name
  const tel = order.phoneNumber
  const address = Object.values(order.address)
 

  console.log(`Olá, ${deliveryPerson}, entrega para: ${name}, telefone: ${tel}, ${address[0]} nº:${address[1]}, Apt:${address[2]}.`)

}
customerInfo(order);


const orderModifier  = (order) => {
  const newName = order.name = "Luiz Silva"
  const newTotal = order.payment.total = '50,00'
  const pizzas = Object.keys(order.order.pizza)
  const coke = order.order.drinks.coke.type
  
  console.log(`Olá ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${coke} é R$ ${newTotal}.`)
}

orderModifier(order);

//2


// parte 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1

const addTurno = (obj, key, value) => {
 obj[key] = value
}

addTurno(lesson2, 'turno', 'noite')
console.log(lesson2)

//2

const keyList = (lessonName) => {console.log(Object.keys(lessonName))}
keyList(lesson2)

//3

const size = (lessonName) => {(console.log((Object.keys(lessonName).length)))}
size(lesson1)

// 4
const ValueList = (lessonName) => {console.log(Object.values(lessonName))}
ValueList(lesson2)

//5
const allLessons = (Object.assign({}, {lesson1, lesson2, lesson3}))
console.log(allLessons)

//6
const student1 = allLessons.lesson1.numeroEstudantes
const student2 = allLessons.lesson2.numeroEstudantes
const student3 = allLessons.lesson3.numeroEstudantes

const numberOfStudents = (obj) =>{
  let soma = 0
  const keys = Object.keys(obj);

  for (i in keys){
    soma += obj[keys[i]].numeroEstudantes
  }
  return soma
}

console.log(numberOfStudents(allLessons));

//7

const getValueByNumber = (obj, position) => {
 return Object.values(obj)[position]
}
console.log (getValueByNumber(lesson1, 0))

//8 Incompleta

// const verifyPair = (obj, key, value) => {
//   const chave = Object.keys(obj).includes(key)
//   const valor = Object.values(obj).includes(value)
//   return chave, valor
// }

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr){
    if(arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual
}



console.log(verifyPair(lesson3, 'turno', 'noite'))
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));



