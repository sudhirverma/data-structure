// https://leetcode.com/problems/generate-parentheses/description/


const backtrack = (paranthesis, open, close, result, size) => {
    if (paranthesis.length === size*2) {
        return result.push(paranthesis);
    }
    if (open < size) {
        backtrack(paranthesis + '(', open+1, close, result, size);
    }
    if (close < open) {
        backtrack(paranthesis + ')', open, close+1, result, size);
    }
}


const generateParenthesis = (n) => {
    const result = [];
    backtrack('', 0, 0, result, n);
    return result;
};


// Test cases
console.log(generateParenthesis(3));  // Output: ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1));  // Output: ["()"]

// open = 0
// close = 0
// result = ['((()))', '(()())', '(())()', '()(())', '()()()']
// ''
