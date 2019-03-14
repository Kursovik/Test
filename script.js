'use strict';

let money = prompt("Ваш бюджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
let appdata = {
    budget: money,
    timedata: time,
    expenses: {
        a: b
    },
    optionalExpenses: {

    },
    income: [],
    savings: false
};
alert(money / 30);