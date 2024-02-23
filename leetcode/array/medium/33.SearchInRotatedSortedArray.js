// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        console.log(mid, left, right)
        if (target === nums[mid]) {
            return mid;
        } 
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
    return  -1;
};

// let nums = [4,5,6,7,0,1,2], target = 0;
let nums = [4,5,6,7,0,1,2,3], target = 3
let result = search(nums, target);
console.log(result);