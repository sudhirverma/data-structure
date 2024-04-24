// https://leetcode.com/problems/fraction-to-recurring-decimal/description/

var fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) return "0";

    let result = '';
    // Handle sign
    if ((numerator < 0) ^ (denominator < 0)) {
        result += '-';
    }

    // Convert to positive values
    let dividend = Math.abs(numerator);
    const divisor = Math.abs(denominator);

    // Integral part
    result += Math.floor(dividend / divisor);
    dividend %= divisor;

    // If remainder is zero, return result
    if (dividend === 0) return result;

    // Fractional part
    result += '.';

    // Use a map to store positions of remainders
    const remainderMap = new Map();

    while (dividend !== 0) {
        // If the remainder repeats, insert '(' and ')'
        if (remainderMap.has(dividend)) {
            result = result.slice(0, remainderMap.get(dividend)) + '(' + result.slice(remainderMap.get(dividend)) + ')';
            break;
        }

        // Store the current remainder position
        remainderMap.set(dividend, result.length);

        // Perform division
        dividend *= 10;
        result += Math.floor(dividend / divisor);
        dividend %= divisor;
    }

    return result;
};

// Example usage:
// console.log(fractionToDecimal(-50, 8));
// console.log(fractionToDecimal(1, 2));      // Output: "0.5"
// console.log(fractionToDecimal(2, 1));      // Output: "2"
console.log(fractionToDecimal(4, 333));    // Output: "0.(012)"
