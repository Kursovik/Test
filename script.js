'use strict';

let money = prompt("Ваш бюджет за месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appdata = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {

    },
    income: [],
    savings: false
};
for (let i = 0; i < 2; i++) {
    var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if (typeof (a) === 'string' && (typeof (a) != null && typeof (b) != null) && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appdata.expenses[a] = b;
    } else {

    }
};
appdata.moneyPerDay = appdata.budget / 30;

alert("Ежедневный бюджет: " + appdata.moneyPerDay);
if (appdata.moneyPerDay < 100) {
    console.log("min level money");

} else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appdata.moneyPerDay > 2000) {
    console.log(" high level money");
} else console.log("Error");