// https://leetcode.com/problems/majority-element/

var majorityElement = function (nums) {
    let hash = {};
    let result;
    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
            if (!result) {
                result = nums[i];
            }
        } else {
            hash[nums[i]]++;
            if (hash[result] < hash[nums[i]] && result !== nums[i]) {
                result = nums[i];
            }
        }
    }
    return result;
};

let nums = [2, 2, 1, 1, 1, 2, 2, 1, 1, 1]
let result = majorityElement(nums);
console.log(result);