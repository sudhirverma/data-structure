// https://leetcode.com/problems/sort-colors/

var sortColors = function (nums) {
    let left = 0, rigth = nums.length - 1;
    for (let i = left; i <= rigth && left <= rigth; i++) {
        if (nums[i] === 2) {
            [nums[i], nums[rigth]] = [nums[rigth], nums[i]]
            rigth--;
            i--;
            continue;
        }
        if (nums[i] === 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]];
            left++;
        }
    }
    return nums;
};

// let nums = [2,2,0,1,0,0,0,0,2,1,1,0];
// let nums = [2,0,1];
let nums = [2, 0, 0, 2, 1, 1];
// let nums = [2,2];
console.log(sortColors(nums));