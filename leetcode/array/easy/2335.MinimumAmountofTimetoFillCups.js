// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/

var fillCups = function (amount) {
    let result = 0;
    while (amount.sort((a, b) => b - a)[0]) {
        if (amount[0] && amount[1]) {
            amount[0]--;
            amount[1]--;
            result++;
        } else {
            result += amount[0];
            amount[0] = 0;
        }
    }
    return result;
};

let amount = [1, 4, 2];
let result = fillCups(amount);
console.log(result);
