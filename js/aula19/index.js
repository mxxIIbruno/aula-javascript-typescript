/*
Primitivos - string, number, boolean, undefined, 
null (bigint, symbol)

Referência (mutável) - array, object, function - Passados por referência
*/
// let a = [1, 2, 3];
// let b = [...a];
// let c = b;

// a.push(4);
// console.log(a, b);

// b.pop();
// console.log(a, b);

// c.push('Bruno');
// console.log(c, b);

const a = {
    nome: 'Bruno',
    sobrenome: 'Santos'
};

const b = {...a};

a.nome = 'Gabi';

console.log(a);
console.log(b);
