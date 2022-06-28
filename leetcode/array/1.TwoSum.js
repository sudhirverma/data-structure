// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    let hash = {};
    let result;
    for (let i = 0; i < nums.length; i++) {
        let targetResult = target - nums[i];
        if (nums[hash[targetResult]] + nums[i] === target) {
            result = [hash[targetResult], i];
        } else {
            hash[nums[i]] = i;
        }
    }
    return result;
};

let nums = [2,7,11,15], target = 9;

const result = twoSum(nums, target);

console.log(result);
