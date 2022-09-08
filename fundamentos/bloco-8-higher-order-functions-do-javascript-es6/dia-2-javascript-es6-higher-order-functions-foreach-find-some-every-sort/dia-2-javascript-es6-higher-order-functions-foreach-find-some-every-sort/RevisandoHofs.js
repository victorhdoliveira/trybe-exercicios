const techProducts = [ { id: 1,  name: 'computer', price: 2100, }, { id: 2, name: 'mouse', price: 78, }, { id: 3, name: 'monitor', price: 589, }, { id: 4, name: 'keyboard', price: 78, }, { id: 5, name: 'HD', price: 350, }, { id: 6, name: 'webcam', price: 187, }, { id: 7, name: 'mic', price: 78, }, { id: 8, name: 'headset', price: 216, }, ];

//1  - Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares

const idPar = techProducts.filter((match) => (
    match.id % 2 === 0)).map((match) => `${match.name}`
)
console.log(idPar)

//2 - Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário

function price300() {
        return techProducts.some((match) => match.price > 300);
      }
console.log(price300())

//3
const totalPric = (id, qtd) => techProducts.find((match) => match.id === id).price * qtd
console.log(totalPric(1, 3))

//4  - Crie um algoritmo que dado um preço retorne todos os produtos com preços iguais

const samePrice = (price) => techProducts.filter(match => match.price === price)
console.log(samePrice())

