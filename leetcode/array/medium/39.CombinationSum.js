// https://leetcode.com/problems/combination-sum/

// [2,3,6,7] 7
// sum = 2 [2] i=0,
// sum = 4 [2,2] i=0
// sum = 6 [2,2,2] i=0
// sum = 8 [2,2,2] i=0


function createSubArray(results, subResult, start, sum, target, candidates) {
    if (sum === target) {
        results.push([...subResult]);
    } else {
        for (let i = start; i < candidates.length; i++) {
            const newSum = sum + candidates[i];
            if (newSum <= target) {
                subResult.push(candidates[i])
                createSubArray(results, subResult, i, newSum, target, candidates);
                subResult.pop();
                continue;
            }
            i = candidates.length - 1;
        }
    }
}

var combinationSum = function(candidates, target) {
    const results = [];
    const subResult = [];
    createSubArray(results, subResult, 0, 0, target, candidates);
    return results;
};


let candidates = [2,3,6,7], target = 7;
// let candidates = [2,3,5], target = 8;
// let candidates = [2], target = 1;
// let candidates = [1,2], target = 4;
let result = combinationSum(candidates, target);
console.log(result);