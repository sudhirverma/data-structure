// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function(nums) {
    if (nums.length === 1) return 0;
    let left = 0, right = nums.length - 1;
    let result;
    while (result === undefined) {
        let mid = Math.floor((left+right)/2);
        let l = nums[mid - 1] ?? -Infinity, r = nums[mid + 1] ?? -Infinity;
        // if (l === undefined && r === undefined) result = mid;
        if (l < nums[mid] && r < nums[mid]) {
            result = mid;
        }
        if (l > nums[mid]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return result;
};

// let nums = [2,1];
let nums = [1,2];
console.log(findPeakElement(nums));