// https://leetcode.com/problems/evaluate-reverse-polish-notation/

var evalRPN = function(tokens) {
    const stack = [];
    for(let c of tokens) {
        if(c == "+") {
            stack.push(stack.pop() + stack.pop())
        } else if(c == "-") {
            const a = stack.pop(), b = stack.pop();
            stack.push(b - a);
        } else if(c == "*") {
            stack.push(stack.pop() * stack.pop())
        } else if(c == "/") {
            const a = stack.pop(), b = stack.pop();
            stack.push(parseInt(b / a));
        } else {
            stack.push(parseInt(c));
        }
    }
    return stack[0];
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])

