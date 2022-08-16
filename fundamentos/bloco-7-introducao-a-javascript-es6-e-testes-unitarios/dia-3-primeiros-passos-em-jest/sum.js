module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList};


function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }


function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

  console.log(myRemove([1, 2, 3, 4], 3))


function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }
  
  console.log(myFizzBuzz(15))

function encode(string) {
    let swap1 = string.replace(/a/g, 1);
    let swap2 = swap1.replace(/e/g, 2);
    let swap3 = swap2.replace(/i/g, 3);
    let swap4 = swap3.replace(/o/g, 4);
    let swap5 = swap4.replace(/u/g, 5);
    return swap5;
  }

function decode(string2) {
    let swap6 = string2.replace(/1/g, "a");
    let swap7 = swap6.replace(/2/g, "e");
    let swap8 = swap7.replace(/3/g, "i");
    let swap9 = swap8.replace(/4/g, "o");
    let swap10 = swap9.replace(/5/g, "u");
    return swap10;
  }

  function techList(techNames, personNames) {
    if (techNames.length == 0){
        return "Vazio!"
    }

    let obj = []
    techNames.sort()

    for (let index = 0; index < techNames.length; index += 1){
        obj.push ({
            tech: techNames[index],
            name: personNames
        })
    }
        return obj
  }

