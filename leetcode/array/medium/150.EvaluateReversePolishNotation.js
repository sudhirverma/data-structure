// https://leetcode.com/problems/evaluate-reverse-polish-notation/

const evalRPN = (tokens) => {
    const stack = [];
    for (let i=0; i<tokens.length; i++) {
        if (tokens[i] === '+') {
            stack.push(stack.pop() + stack.pop());
        } else if (tokens[i] === '-') {
            stack.push(stack.pop() - stack.pop());       
        } else if (tokens[i] === '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (tokens[i] === '/') {
            let first = stack.pop(), second = stack.pop();
            stack.push(Math.floor(second / first));       
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack[0];
};

let tokens = ["4","13","5","/","+"];
console.log(evalRPN(tokens));