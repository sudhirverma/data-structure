// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
    let sum = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        sum = digits[i] + sum;
        if (sum > 9) {
            digits[i] = sum - 10;
            sum = 1;
        } else {
            digits[i] = sum;
            sum = 0;
            break;
        }
    }
    if (sum !== 0) {
        digits.unshift(sum);
    }
    return digits;
};

let digits = [1,2,9]

console.log(plusOne(digits))