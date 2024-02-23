// https://leetcode.com/problems/move-zeroes/


var moveZeroes = function (nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return nums;
    let copyLength = nums.length;
    for (let i = 0; i < copyLength; i++) {
        if (nums[i] === 0) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            i--;
            copyLength--;
        }
    }
    return nums;
};