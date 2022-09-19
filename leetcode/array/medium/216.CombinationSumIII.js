// https://leetcode.com/problems/combination-sum-iii/


const combination = (k, start, n, result, subResult = [], sum = 0) => {
    for (let i = start; i<=9; i++) {
        let newSum = sum + i;
        subResult.push(i);
        if (subResult.length === k-1) {
            let lastSum = n - newSum;
            if (lastSum < 0 || lastSum > 9 || subResult[k-2] >= lastSum) {
                subResult.pop();
                continue;
            }
            result.push([...subResult.concat(lastSum)]);
            subResult.pop();
            continue;
        }
        combination(k, i+1, n, result, subResult, newSum);
        subResult.pop();
    }
}

var combinationSum3 = function(k, n) {
    const result = [];
    combination(k, 1, n, result);
    return result;
};

// let k = 3, n = 7;
// let k = 3, n = 9;
// let k = 4, n = 1;
// let k = 9, n = 45;
let k = 3, n = 15;
// let k = 2, n = 18;
console.log(combinationSum3(k, n));