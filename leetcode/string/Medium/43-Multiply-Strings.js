// https://leetcode.com/problems/multiply-strings/description/

function multiplyStrings(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const m = num1.length;
    const n = num2.length;
    const result = Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const digit1 = num1.charCodeAt(i) - 48; // char code of '0' is 48
            const digit2 = num2.charCodeAt(j) - 48; // char code of '0' is 48
            const product = digit1 * digit2;

            const sum = product + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    const resultStr = result.join('').replace(/^0+/, '');
    return resultStr || '0';
}

// Test cases
// console.log(multiplyStrings("2", "3"));  // Output: "6"
console.log(multiplyStrings("99", "99"));  // Output: "56088"

