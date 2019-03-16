var money, time;

function start() {
    money = prompt("Ваш бюджет за месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет за месяц?", '');
    }
}
start();
var appdata = {
    budget: money,
    timedata: time,
    expenses: {},
    optionalExpenses: {

    },
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (var i = 0; i < 2; i++) {
            var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");
            if (typeof (a) === 'string' && (typeof (a) != null && typeof (b) != null) && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appdata.expenses[a] = b;
            } else {

            }
        }
    },
    checkSavings: function () {
        if (appdata.savings == true) {
            var save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?");
            appdata.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appdata.monthIncome);
        }
    },
    detectBudget: function () {
        appdata.moneyPerDay = (appdata.budget / 30).toFixed(1);
        alert("Ежедневный бюджет: " + appdata.moneyPerDay);
    },
    detectLevel: function () {
        if (appdata.moneyPerDay < 100) {
            console.log("min level money");

        } else if (appdata.moneyPerDay > 100 && appdata.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appdata.moneyPerDay > 2000) {
            console.log(" high level money");
        } else {
            console.log("Error");
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход?", "");
        if (typeof (items) == 'string' && typeof (items) != null && items != '') {
            appdata.income = items.split(", ");
            appdata.income.push(prompt("Хотите добавить что-то еще?", ''));
            appdata.income.sort();
            appdata.income.forEach(function (item, i, mass) {
                alert((i + 1) + ': ' + item);
            });
        }
    }
};

appdata.chooseExpenses();
appdata.detectBudget();
appdata.detectLevel();
appdata.checkSavings();
for(let key in appdata){
    alert("Наша программа включает в себя данные: " + key);
}