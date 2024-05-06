// https://leetcode.com/problems/different-ways-to-add-parentheses/description/

const compute = (exp, memo) => {
    if (exp.match(/^\d+$/)) { // Base case: if expression is a single number
        return [parseInt(exp)];
    }

    if (memo[exp]) { // Check if the expression has been computed before
        return memo[exp];
    }

    const result = [];
    for (let i = 0; i < exp.length; i++) {
        const char = exp[i];
        if (char === '+' || char === '-' || char === '*') {
            const leftResults = compute(exp.slice(0, i), memo); // Compute left part
            const rightResults = compute(exp.slice(i + 1), memo); // Compute right part
            // Combine left and right results based on the operator
            for (const left of leftResults) {
                for (const right of rightResults) {
                    if (char === '+') {
                        result.push(left + right);
                    } else if (char === '-') {
                        result.push(left - right);
                    } else if (char === '*') {
                        result.push(left * right);
                    }
                }
            }
        }
    }

    memo[exp] = result; // Memoize the result for this expression
    return result;
};

var diffWaysToCompute = function (expression) {
    const memo = {};

    return compute(expression, memo);
};

// Test cases
console.log(diffWaysToCompute("2-1-1")); // Output: [0, 2]
console.log(diffWaysToCompute("2*3-4*5")); // Output: [-34, -14, -10, -10, 10]
