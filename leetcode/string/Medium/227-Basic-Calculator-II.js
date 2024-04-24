// https://leetcode.com/problems/basic-calculator-ii/description/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [];
    let num = 0;
    let sign = '+';
    const operators = new Set(['+', '-', '*', '/']);

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            num = num * 10 + parseInt(s[i]);
        }
        if (operators.has(s[i]) || i === s.length - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                stack[stack.length - 1] *= num;
            } else if (sign === '/') {
                stack[stack.length - 1] = parseInt(stack[stack.length - 1] / num);
            }
            sign = s[i];
            num = 0;
        }
    }

    return stack.reduce((acc, val) => acc + val, 0);
};

// console.log(calculate("3+2*2")); // Output: 7
// console.log(calculate("3/2")); // Output: 1
// console.log(calculate("3+5 / 2")); // Output: 5
console.log(calculate("1+2*3-4/2")); // Output: 5
