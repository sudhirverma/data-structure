// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/


var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === nums[right]) {
            const result = nums.indexOf(target);
            if (result !== -1) return true;
            return false;
        }
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return true;
        if (nums[mid] >= nums[left]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};


let nums = [2, 5, 6, 0, 0, 1, 2], target = 0;
// let nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], target = 2;
// let nums = [1,3], target = 1;
// let nums = [4,5,6,7,0,1,2], target = 0;
// let nums = [3,1,1], target = 1;
// let nums = [1,3], target = 3;
// let nums = [2,5,6,0,0,1,2], target = 3;
console.log(search(nums, target));