const nome = prompt('Digite seu nome:');

// Seu nome é: _____________!<br>
document.body.innerHTML = `Seu nome é: <strong>${nome}</strong>!<br>`;

// Seu nome tem ___ letras!<br>
document.body.innerHTML += `Seu nome tem <strong>${nome.replace(/\s/g, "").length}</strong> letras!<br>`;

// A segunda letra do seu nome é: _____!<br>
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome.charAt(1)}</strong>!<br>`;

// Qual o primeiro índice da letra LETRA no seu nome? ______<br>
document.body.innerHTML += `Qual o primeiro índice da letra "o" no seu nome? <strong>${nome.indexOf("o") + 1}</strong>!<br>`;

// Qual o último índice da letra LETRA no seu nome? _______<br>
document.body.innerHTML += `Qual o último índice da letra "o" no seu nome? <strong>${nome.lastIndexOf("o")}</strong>!<br>`;

// As últimas 3 letras do seu nome são: _______<br>
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong>!<br>`;

// As palavras do seu nome são: ________<br>
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(" ").join(", ")}</strong>!<br>`;

// Seu nome com letras maiúsculas: _________<br>
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toUpperCase()}</strong>!<br>`;

// Seu nome com letras minúsculas: _________<br>
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLowerCase()}</strong>!<br>`;
