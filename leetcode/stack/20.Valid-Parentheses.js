// https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    if(s.length == 1) return false;
    let stack = [];
    for(let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if(ch == '(' || ch == '{' || ch == '[') {
            stack.push(ch);
        } else {
            if(ch === ')' && stack[stack.length-1] !== '(') {
                return false;
            }
            if(ch === '}' && stack[stack.length-1] !== '{') {
                return false
            };
            if(ch === ']' && stack[stack.length-1] !== '[') {
                return false
            };
            stack.pop()
        }
    }
    return stack.length == 0
};


console.log(isValid("({[]})"));