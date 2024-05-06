// https://leetcode.com/problems/additive-number/description/

function isValid(numStr) {
    return numStr.length === 1 || (numStr[0] !== '0' && parseInt(numStr) !== 0);
}

function backtrack(start, num1, num2, num) {
    if (start === num.length) {
        return true;
    }
    for (let i = start; i < num.length; i++) {
        const numStr = num.substring(start, i + 1);
        if (!isValid(numStr)) {
            continue;
        }
        const num3 = parseInt(numStr);
        if (num3 === num1 + num2) {
            if (backtrack(i + 1, num2, num3, num)) {
                return true;
            }
        } else if (num3 > num1 + num2) {
            break; // The number is too large, no need to continue
        }
    }
    return false;
}

function isAdditiveNumber(num) {
    for (let i = 1; i <= Math.floor(num.length / 2); i++) {
        for (let j = 1; j <= Math.floor((num.length - i) / 2); j++) {
            const num1Str = num.substring(0, i);
            const num2Str = num.substring(i, i + j);
            if (!isValid(num1Str) || !isValid(num2Str)) {
                continue;
            }
            const num1 = parseInt(num1Str);
            const num2 = parseInt(num2Str);
            if (backtrack(i + j, num1, num2, num)) {
                return true;
            }
        }
    }
    return false;
}

// Test cases
// console.log(isAdditiveNumber("0"));   // Output: true
// console.log(isAdditiveNumber("199100199")); // Output: true
// console.log(isAdditiveNumber("235813")); // Output: true
console.log(isAdditiveNumber("211738")); // Output: true
// console.log(isAdditiveNumber("111")); // Output: true
