function concText (msg) {
    text.innerHTML += `${msg} `
}

function getWeekDay (dayWeek) {
    switch (dayWeek) {
        case 0:
            return 'Domingo,';
        case 1:
            return 'Segunda-feira,';
        case 2:
            return 'Terça-feira,';
        case 3:
            return 'Quarta-feira,';
        case 4:
            return 'Quinta-feira,';
        case 5:
            return 'Sexta-feira,';
        case 6:
            return 'Sabado,';
        default:
            return '';
    }
}

function getNameMonth (month) {
    switch (month) {
        case 0:
            return 'de janeiro';
        case 1:
            return 'de fevereiro';
        case 2:
            return 'de março'
        case 3:
            return 'de abril';
        case 4:
            return 'de maio';
        case 5:
            return 'de junho';
        case 6:
            return 'de julho';
        case 7:
            return 'de agosto';
        case 8:
            return 'de setembro';
        case 9:
            return 'de outubro';
        case 10:
            return 'de novembro';
        case 11:
            return 'de dezembro';
        default:
            return '';
    }
}

function setDozens(day) {
    if (day > 9) {
        return day;
    } else {
        return `0${day}`;
    }
}

const text = document.querySelector('h1');
text.innerHTML = '';

const date = new Date();
let messagem = getWeekDay(date.getDay());

concText(messagem);
concText(date.getDate());
concText(getNameMonth(date.getMonth()));
concText('de ' + date.getFullYear() + '<br>');
concText(date.getHours() + ':' + setDozens(date.getMinutes()));
