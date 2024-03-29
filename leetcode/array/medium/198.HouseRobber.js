// https://leetcode.com/problems/house-robber/

var rob = function (nums) {
    let newLength = nums.length + 2;
    let store = Array(newLength).fill(0);
    store[2] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        store[i + 2] = nums[i] + Math.max(store[i], store[i - 1]);
    }
    return Math.max(store[newLength - 2], store[newLength - 1]);
};

let nums = [1, 2, 3, 1];
console.log(rob(nums));