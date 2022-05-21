// https://leetcode.com/problems/longest-valid-parentheses/

var longestValidParentheses = function(s) {
    if(s.length === 0) return 0;
    
    let stack = [-1];
    let max = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if(stack.length === 0) {
                stack.push(i);
            } else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    return max;
};
console.log(longestValidParentheses(")()(((((()))))("))