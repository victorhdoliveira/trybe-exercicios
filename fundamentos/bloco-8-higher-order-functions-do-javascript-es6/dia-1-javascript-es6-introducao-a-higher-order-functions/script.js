// 1

const newEmployees = (person) => {
    const employees = {
      id1: person('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: person('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: person('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  const register = (nome) => {
    const obj = {
        nomeCompleto: nome,
        email: `${nome.toLowerCase().split(' ').join('.')}@trybe.com`,
    }
    return obj
  }

console.log(newEmployees(register))

// 2

const random = (min, max) => {
    return Math.floor(Math.random()* (max - min) + min);
}

const check = (aleatory, bet) => (aleatory === bet) ? 'Parabéns, você ganhou' : 'Tente novamente'
console.log(check(random(1, 5),1));

//3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const score = (correctAnswers, studentAnswers, callback) => {
    let counter = 0;
    for (let index = 0; index < correctAnswers.length; index += 1) {
        const compare = callback(correctAnswers[index], studentAnswers[index])
        counter += compare
    }
    return counter
}

const answers = (a, b) => {
    if (a === b){
        return 1
    } else if (b === 'N.A'){
        return 0;
    } else {
        return -0.5
    }
}

console.log(score(RIGHT_ANSWERS, STUDENT_ANSWERS, answers))

