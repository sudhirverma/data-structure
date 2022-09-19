// https://leetcode.com/problems/combination-sum-ii/

function findUniqueCombination(candidates, target, start, sum, result, subResult) {
    if (sum === target) result.push([...subResult]);
    for (let i = start; i< candidates.length; i++) {
        let newSum = sum + candidates[i];
        if (newSum <= target) {
            subResult.push(candidates[i]);
            findUniqueCombination(candidates, target, i+1, newSum, result, subResult);
            subResult.pop();
            while (candidates[i] === candidates[i+1]) i++;
            continue;
        }
        i = candidates.length - 1;
    }
}

var combinationSum2 = function(candidates, target) {
    const result = [];
    const subResult = [];
    findUniqueCombination(candidates.sort((a,b) => a-b), target, 0, 0, result, subResult);
    return result;
};

// let candidates = [10,1,2,7,6,1,5,4], target = 8;
let candidates = [2,5,2,1,2], target = 5;
let result = combinationSum2(candidates, target);
console.log(result);