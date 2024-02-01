const nome = 'Bruno Santos';
const idade = 30;
const peso = 84;
const alturaEmM = 1.8;

let imc;
let anoNascimento;

imc = alturaEmM ** 2 / peso;
anoNascimento = 2024 - idade;

// tamplate string

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);
