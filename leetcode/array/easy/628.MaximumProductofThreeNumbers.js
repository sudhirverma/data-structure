// https://leetcode.com/problems/maximum-product-of-three-numbers/

var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let result1 = nums[0] * nums[1] * nums[len - 1];
    let result2 = nums[len - 1] * nums[len - 2] * nums[len - 3];
    return Math.max(result1, result2);
};

let nums = [-100, -2, -3, 1];
let result = maximumProduct(nums);

console.log(result);