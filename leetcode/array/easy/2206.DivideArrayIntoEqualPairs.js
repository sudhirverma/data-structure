// https://leetcode.com/problems/divide-array-into-equal-pairs/



var divideArray = function (nums) {
    let deivideInPair = {};
    for (let i = 0; i < nums.length; i++) {
        if (!deivideInPair[nums[i]]) {
            deivideInPair[nums[i]] = 1;
            continue;
        }
        delete deivideInPair[nums[i]];
    }
    if (Object.keys(deivideInPair).length === 0) return true;
    return false;
};

let nums = [3, 2, 3, 2, 2, 2];
let result = divideArray(nums);
console.log(result);
