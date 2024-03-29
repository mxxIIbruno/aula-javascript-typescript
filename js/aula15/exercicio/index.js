/*
Seu número é [Output]
Raiz quadrada: [Output]
[Output] é inteiro? [Output] -> boolean
É NaN? [Output] -> boolean
Arredondando para cima: [Output]
Arredondando para baixo: [Output]
Com duas casas decimais: [Output]
*/
const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


// Seu número é [Output]
numeroTitulo.innerHTML = numero;

// Raiz quadrada: [Output]
texto.innerHTML = `Raiz quadrada: ${Math.sqrt(numero)}<br>`;

// [Output] é inteiro? [Output] -> boolean
document.body.innerHTML += `${numero} é inteiro? ${Number.isInteger(numero)}<br>`;

// É NaN? [Output] -> boolean
document.body.innerHTML += `É NaN? ${Number.isNaN(numero)}<br>`;

// Arredondando para cima: [Output]
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}<br>`;

// Arredondando para baixo: [Output]
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}<br>`;

// Com duas casas decimais: [Output]
document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}<br>`;
