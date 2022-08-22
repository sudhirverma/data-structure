// https://leetcode.com/problems/baseball-game/

var calPoints = function(ops) {
    let result = [];
    for (let i=0; i<ops.length; i++) {
        if (ops[i] === 'C') {
            result.pop();
            continue;
        }
        if (ops[i] === '+') {
            result.push(result[result.length-2] + result[result.length-1]);
            continue;
        }
        if (ops[i] === 'D') {
            result.push(2*result[result.length-1]);
            continue;
        }
        result.push(parseInt(ops[i]));
    }
    let count = 0;
    for (let i=0; i<result.length; i++) {
        count+= result[i];
    }
    return count;
};

ops = ["5","2","C","D","+"]

let result = calPoints(ops);

console.log(result);