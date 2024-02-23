// https://leetcode.com/problems/longest-harmonious-subsequence/

var findLHS = function (nums) {
    let countNumber = {};
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!countNumber[nums[i]]) {
            countNumber[nums[i]] = 1;
        } else {
            countNumber[nums[i]]++;
        }
    }
    for (let value of Object.keys(countNumber)) {
        let count;
        let current = parseInt(value);
        if (countNumber[current + 1]) {
            count = countNumber[current] + countNumber[current + 1];
            result.push(count);
        }
    };
    if (result.length === 0) {
        return 0;
    }
    return Math.max(...result);
};

// let nums = [1, 1, 1, 1];
let nums = [1,3,2,2,5,2,3,7];

let result = findLHS(nums);
console.log(result);