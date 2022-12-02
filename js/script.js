/*--------1-ше відео ДЗ (Оператори)--------*/

//Варіант №1 - НЕПРАВИЛЬНО,
//поверне строку 35-22
/*
console.log('35' + - "22");
    Поверне 13
*/

//Варіант №2 - ПРАВИЛЬНО
/*
console.log('35' * "22");
    Поверне 770
*/

//Варіант №3 - НЕПРАВИЛЬНО
/*
console.log('558' > 22++);
    Поверне true
*/

//Варіант №4 - НЕПРАВИЛЬНО, поверне 0
/*
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
    Поверне 1
*/

//Варіант №5 - НЕПРАВИЛЬНО, поверне 11
/*
console.log(!false && 11 || 18 && !'');
    Поверне 18
*/

//Варіант №6 - Поверне 0
/*
let name = 0;
console.log(name ?? "Без імені");
*/


/*--------2-ге відео ДЗ (IF ELSE)--------*/
//Варіант №1 - Поверне 'Ложь!'
//Варіант №2 - Поверне 'Истина!'
//Варіант №3 - Поверне 'Истина!'
//Варіант №4 - Поверне 'Истина!'

/*--------3-тє відео ДЗ (Цикли FOR, WHILE)--------*/
//Задача №1
for (let num = 1; num < 6; num++) {
    console.log(num);
}

//Задача №2 - Останній виведений результат 1
let num = 8;
while (num) {
    console.log(num);
    num--;
}

//Задача №3
let i = 0;
while (i < 3) {
    console.log(`Число: ${i++}`);
}

//Задача №4
firstFor: for (let num = 0; num < 2; num++) {
    for (let size = 0; size < 3; size++) {
        if (size == 1) break firstFor;
        console.log(size);
    }
}



/*--------4-те відео ДЗ (number)--------*/
//Задача №1
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

//Задача №2
let value = "135.58px";
console.log(parseFloat(value));

//Задача №3
let value2 = 58 + "Фрілансер";
if (isNaN(value2)) {
    console.log('Результат NaN');
}

//Задача №4
console.log(Math.max(10, 58, 39, -150, 0));

//Задача №5
console.log(Math.floor(58.858));

/*--------5-те відео ДЗ (string)--------*/
//Задача №1 - НЕПРАВИЛЬНО. Вірний варіант:
let fls = "фрілансер";
let text = `Привіт! Я ${fls}`;
console.log(text);

//Задача №2
let text2 = 'фрілансер';
console.log(text2[2]);

//Задача №3 - НЕВІРНО, результат "123456"
let text3 = 123 + "456";
console.log(text3);

//Задача №4
let text4 = 'фрілансер';
console.log(text4.toUpperCase());

//Задача №5
let text5 = 'фрілансер';
console.log(text5.slice(3, 6));

//Задача №6 - false

let text6 = 'фрілансер';
console.log(text6.includes('лан', 4));