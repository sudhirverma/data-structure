// https://leetcode.com/problems/calculate-amount-paid-in-taxes/

var calculateTax = function (brackets, income) {

    let totalTaxesPaid = 0;
    let totalIncomeTaxed = 0;

    while (income > 0) {
        const currentBracket = brackets.shift();
        const taxableIncome = Math.min(income, currentBracket[0] - totalIncomeTaxed);
        const taxAmount = taxableIncome * (currentBracket[1] / 100);
        totalTaxesPaid += taxAmount;
        totalIncomeTaxed = currentBracket[0];
        income = income - taxableIncome;

    }

    return totalTaxesPaid;
};

let brackets = [[3, 50], [7, 10], [12, 25]], income = 10;
let result = calculateTax(brackets, income);
console.log(result);