// Isso é um objeto literal
const pessoa1 = {
    nome: 'Bruno',
    sobrenome: 'Santos',
    idade: 27,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// const pessoa2 = {
    //     nome: 'Judite',
    //     sobrenome: 'Vieira',
    //     idade: 29
    // };
    
    // console.log(pessoa2.nome);
    // console.log(pessoa2.sobrenome);
    // console.log(pessoa2.idade);
    
// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// function criaPessoa (nome, sobrenome, idade) {
//     return {nome, sobrenome, idade };
// }

// const pessoa1 = criaPessoa('Bruno', 'Santos', 56);
// const pessoa2 = criaPessoa('Gustavo', 'Castanhari', 45);

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);
pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);

// console.log(pessoa2.nome);
// console.log(pessoa2.sobrenome);
// console.log(pessoa2.idade);
