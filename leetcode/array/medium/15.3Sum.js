// https://leetcode.com/problems/3sum/

export var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    const results = [];
    for (let i = 0; i < nums.length - 2; i++) {
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum < 0) l++;
            else if (sum > 0) r--;
            else {
                results.push([nums[i], nums[l], nums[r]]);
                while (nums[i] === nums[i + 1]) i++;
                while (nums[l] === nums[l + 1]) l++;
                while (nums[r] === nums[r - 1]) r--;
                l++; r--;
            }
        }
    }
    return results;
};

let nums = [-1, 0, 1, 2, -1, -4];
let result = threeSum(nums);
console.log(result);