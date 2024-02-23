// https://leetcode.com/problems/rotate-array/

function swap(nums, l, r) {
    while (l < r) {
        let first = nums[l];
        let last = nums[r];
        nums[l] = last;
        nums[r] = first;
        l += 1;
        r -= 1;
    }
}

var rotate = function (nums, k) {
    // reverse nums
    swap(nums, 0, nums.length - 1);
    const rotate = k % nums.length;
    // reverse till k
    swap(nums, 0, rotate - 1);
    // reverse from k end to nums.length -1
    swap(nums, rotate, nums.length - 1);
};

let nums = [1, 2, 3, 4, 5, 6, 7], k = 3;
console.log(rotate(numbers, k));