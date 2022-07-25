let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

//1

console.log('Bem-vinda, ' + info.personagem)

//2

info.recorrente = 'Sim'

//3

for (let index in info){
    console.log(index)
}

//4
for (let index in info){
    console.log(info[index])
}

//5
let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',

}

for (let index in info){
    if (
        index === 'recorrente' &&
        info[index] === 'Sim' &&
        info2[index] === 'Sim'
    ){
        console.log('Ambos recorrentes')
    } else {
        console.log(info[index] + ' e ' +  info2[index])
    }
}

//
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
//

//6

console.log('O livro favorito de ' + leitor.nome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.')

//7
leitor.livrosFavoritos.push(
    {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
)

//8
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')
