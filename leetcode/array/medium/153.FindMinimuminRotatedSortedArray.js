// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

var findMin = function (nums) {
    if (nums[0] < nums[nums.length - 1] || nums.length === 1) return nums[0];
    let left = 0, right = nums.length - 1;
    let result;
    while (result === undefined) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= nums[right] && nums[0] <= nums?.[mid - 1]) result = nums[mid];
        if (nums[right] < nums[mid]) {
            left += 1;
        } else {
            right -= 1;
        }
    }
    return result;
};

// let nums = [2,1];
// let nums = [3,4,5,1,2];
// let nums = [4,5,6,7,0,1,2];
let nums = [6, 7, 0, 1, 2, 4, 5];
console.log(findMin(nums));