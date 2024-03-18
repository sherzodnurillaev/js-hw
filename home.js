// задание 1 
let name = 'Alex'
name = name.toLowerCase();
let money = 10000
let account = 7777 

let yourName = prompt("Как вас зовут ?").toLowerCase().trim()

if (yourName === name) {
    let number = +prompt('Номер счета ?').trim()
    if (number === account) {
        let chec = +prompt("Сколько обналичить ?").trim()
        if (chec <= money) {
            alert('Все отлично)')
            alert(`На вашем счету: ${money - chec} руб...`);
        } else {
            console.log("Не хватает денег");
        }
    } else {
        console.log('Пользователь не найден:');
    }
} else {
    console.log("Пользователь не найден:");
}

// Задание 2 ( Клуб )

let newName = prompt(' Как вас зовут ?').toLowerCase().trim()
let first = 'a'
if (newName[0] === first) {
    let yourAge = +prompt('Сколько вам лет ?').trim()
    if (yourAge >= 20 && yourAge <= 40) {
        let backs = +prompt('Сколько у вас денег ?').trim()
        if (backs >= 100) {
            let people = +prompt('Сколько вас ?').trim()
            if (people < 100) {
                alert('Wellcome')
            } else {
                console.log('Go home');
            }
        } else {
            console.log('Go home');
        }
    } else {
        console.log('Go home');
    }
} else {
    console.log('Go home');
}
