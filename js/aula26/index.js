// const tresHoras = 60 * 60 * 3 * 1000; // Segundos * Minutos * Horas * Milisegundos
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 Timestamp unix ou época unix
// const data = new Date(2024, 2, 20, 20, 20, 59, 999);
// const date = new Date(1707193035579);

// console.log('Dia', date.getDate());
// console.log('Mês', date.getMonth() + 1); // Mês começa do 0
// console.log('Ano', date.getFullYear());
// console.log('Hora', date.getHours());
// console.log('Min', date.getMinutes());
// console.log('Seg', date.getSeconds());
// console.log('ms', date.getMilliseconds());
// console.log('Dia semana', date.getDay()); // 0 - Domigo, 6 - Sábado

// console.log(date.toString());
// console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
