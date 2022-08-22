// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function leftItration(result , nums, middle, target) {
    let left = 0;
    let right = middle;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        console.log(mid)
        if (nums[mid] === target) {
            if (nums[mid - 1] !== target) {
                result[0] = mid;
                return;
            }
            leftItration(result , nums, mid, target);
            return;
        } else {
            left = mid + 1;
        }
    }
}

function rightItration(result , nums, middle, target) {
    let left = middle;
    let right = nums.length;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === target) {
            if (nums[mid + 1] !== target) {
                result[1] = mid;
                return;
            }
            rightItration(result , nums, mid, target);
            return;
        } else {
            right = right - 1;
        }
    }
}

var searchRange = (nums, target) => {
    if (nums.length === 0) return [-1,-1];
    if (nums.length === 1 && nums[0] === target) return [0,0];
    let left = 0;
    let right = nums.length;
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        if (nums[mid] === target) {
            let result = [mid, mid];
            leftItration(result , nums, mid, target);
            rightItration(result , nums, mid, target);
            return result;
        } else {
            if (nums[mid] < target) {
                left = mid + 1;
            } 
            if (nums[mid] > target) {
                right = mid;
            }
        }
    }
    return [-1,-1];
};

let nums = [5,7,7,8,8,10], target = 8;
let result = searchRange(nums, target);
console.log(result);