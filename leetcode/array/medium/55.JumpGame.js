// https://leetcode.com/problems/jump-game/

var canJump = function (nums) {
    if (nums.length === 1) return true;
    let newLength = nums[0];
    let maxValue = nums[0];
    for (let i = 0; i <= newLength; i++) {
        if (maxValue <= nums[i]) {
            newLength = i + nums[i];
            maxValue = nums[i];
        }
        if (i + nums[i] >= nums.length - 1 || newLength >= nums.length - 1) return true;
        if (i === newLength || i + nums[i] > newLength) newLength = i + nums[i];
    }
    if (newLength < nums.length - 1) return false;
    return true;
};
let nums = [1, 2, 2, 6, 3, 6, 1, 8, 9, 4, 7, 6, 5, 6, 8, 2, 6, 1, 3, 6, 6, 6, 3, 2, 4, 9, 4, 5, 9, 8, 2, 2, 1, 6, 1, 6, 2, 2, 6, 1, 8, 6, 8, 3, 2, 8, 5, 8, 0, 1, 4, 8, 7, 9, 0, 3, 9, 4, 8, 0, 2, 2, 5, 5, 8, 6, 3, 1, 0, 2, 4, 9, 8, 4, 4, 2, 3, 2, 2, 5, 5, 9, 3, 2, 8, 5, 8, 9, 1, 6, 2, 5, 9, 9, 3, 9, 7, 6, 0, 7, 8, 7, 8, 8, 3, 5, 0]
const result = canJump(nums);
console.log(result);