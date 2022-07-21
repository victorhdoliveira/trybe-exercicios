const a = 5;
const b = 15;
const c = 50;

//1
console.log('Soma ' + (a + b));
console.log('Subtração ' + (a - b));
console.log('Multiplicação ' + (a * b));
console.log('Divisão ' + (a / b));
console.log('Módulo ' + (a % b));

//2

if (a > b) {
   console.log (a);
}
else if (a < b){
    console.log (b);
   }
else {
    console.log("Valores Iguais");
}

//3

if (a > b && a > c) {
    console.log (a);
} else if (b > a && b > c){
    console.log (b);
} else if (c > a && c > b){
    console.log (c);
} else {
    console.log("Não encontrado");
}

 //4

if (a > 0) {
  console.log("positive");
} else if (a < 0){
  console.log("negative");
} else { 
  console.log("zero");
}; 

//5

let ang1 = 60;
let ang2 = 60;
let ang3 = 60;
let somaAng = ang1 + ang2 + ang3;

if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
    console.log("Erro: Ângulo Inválido")
}
else if (somaAng !== 180) {
    console.log("false");
}
else { (somaAng == 180) 
    console.log("true");
}

6
let peça = "CAVALO";

switch (peça.toLowerCase()){
    case "rei":
        console.log("Uma casa em qualquer direção");
        break;
    case "dama":
        console.log("Qualquer direção");
        break;
    case "torre":
        console.log("Vertical e horizontal");
        break;    
    case "bispo":  
        console.log("Diagonal");
        break;
    case "cavalo":
        console.log("Em L");
        break;
    case "peão":
        console.log ("Em frente");
        break;
    default:
        console.log ("Peça não identificada")    
}

//7

function minhaNota (nota) { 
if (nota >= 90 && nota <=100)  {
    return 'A';
}
else if (nota >= 80 && nota < 90) {
    return 'B';
}
else if (nota >= 70 && nota < 80) {
    return 'C';
}
else if (nota >= 60 && nota < 70) {
    return 'D';
}
else if (nota >= 50 && nota < 60) {
    return 'E';
}
else if (nota < 50) {
    return 'F';
}
else { (nota < 0 | nota > 100) 
    return 'Erro: nota incorreta';
}
}
console.log (minhaNota(85));

//8

if (a % 2 === 0 | b % 2 === 0 | c % 2 === 0) { 
    console.log("true");
}
else { console.log ("false")
}

//9 é o inverso do 8

//10

const custounit = 150;
const vendaunit = 289;
const imposto = 1.2;
let q = 1000;

let lucro = (vendaunit - (custounit*imposto))*q
console.log (lucro);

if (custounit < 0 | vendaunit < 0)
console.log("Erro: valores negativos")

//11

let aliquotINSS;
let aliquotIR;

const salBruto = 2000.00;

if (salBruto <= 1556.94) {
  aliquotINSS = salBruto * 0.08;
} else if (salBruto <= 2594.92) {
  aliquotINSS = salBruto * 0.09;
} else if (salBruto <= 5189.82) {
  aliquotINSS = salBruto * 0.11;
} else {
  aliquotINSS = 570.88;
}

const salBase = salBruto - aliquotINSS;

if (salBase <= 1903.98) {
  aliquotIR = 0;
} else if (salBase <= 2826.65) {
  aliquotIR = (salBase * 0.075) - 142.80;
} else if (salBase <= 3751.05) {
  aliquotIR = (salBase * 0.15) - 354.80;
} else if (salBase <= 4664.68) {
  aliquotIR = (salBase * 0.225) - 636.13;
} else {
  aliquotIR = (salBase * 0.275) - 869.36;
};

console.log("Salário: " + (salBase - aliquotIR));