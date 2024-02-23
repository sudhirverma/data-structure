// https://leetcode.com/problems/house-robber-ii/


const helperFunction = (start, length, nums) => {
    const store = Array(length + 3).fill(0);
    for (let i = start; i < length; i++) {
        store[i + 3] = nums[i] + Math.max(store[i], store[i + 1])
    }
    return Math.max(store[store.length - 1], store[store.length - 2]);
}

var rob = function (nums) {
    if (nums.length === 1) return nums[0];
    const first = helperFunction(0, nums.length - 1, nums);
    const second = helperFunction(1, nums.length, nums);
    return Math.max(first, second);
};
// let nums = [1,2,3,1];
let nums = [2,7,9,3,4];
console.log(rob(nums));