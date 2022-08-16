const {sum, myRemove, myFizzBuzz, encode, decode, techList} = require('./sum.js')

//1

// describe('Testando a função sum', () => {
// it('adiciona 4 + 5 igual a 9', () => {
//   expect(sum(4, 5)).toBe(9);
// })
// it('adiciona 0 + 0 igual a 0', () => {
//     expect(sum(0, 0)).toBe(0);
//   })
// it('verifica se os parametros são numbers e a msg de erro', () => {
//     expect(() => sum(4, "5")).toThrow('parameters must be numbers');
// })  
// })

//2

// describe('Testando a função myRemove', () => {
//     it('verificando o input [1, 2, 3, 4], 3', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
// })
//     it('verificando o input [1, 2, 3, 4], 3', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ])
// })
//     it('verificando o input [1, 2, 3, 4], 5', () => {
//     expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ])
// })
// })

// describe('Testando a função myRemove', () => {
//     it('verificando nº divisivel por 3 e 5', () => {
//         expect(myFizzBuzz(15)).toBe('fizzbuzz')
//     })
//     it('verificando nº divisivel por 3', () => {
//         expect(myFizzBuzz(9)).toBe('fizz')
//     })
//     it('verificando nº divisivel por 5', () => {
//         expect(myFizzBuzz(20)).toBe('buzz')
//     })
// })

// describe('Testando a existência das funções', () => {
//     it('função encode existe?', () => {
//         expect(typeof encode).toBe('function')
//     })
//     }) 
//     it('função decode existe?', () => {
//     expect(typeof decode).toBe('function')
// })

/// ............ ///

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas'
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas'
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas'
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas'
//       },
//       {
//         tech: 'React',
//         name: 'Lucas'
//       }
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });
