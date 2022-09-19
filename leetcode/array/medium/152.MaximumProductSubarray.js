// https://leetcode.com/problems/maximum-product-subarray/

var maxProduct = function(nums) {
    let result = nums[0];
    let product = nums[0];
    let storeMaxMin;
    for (let i = 1; i < nums.length; i++) {
        if (product === 0) {
            product = nums[i];
            if (result < product) result = product;
            continue;
        }
        if (nums[i] === 0) {
            if (result < nums[i]) result = nums[i];
            storeMaxMin = [];
            product = 1;
            continue;
        }
        if (product < 0) {
            if (storeMaxMin?.length === undefined || storeMaxMin.length === 0) {
                const first = product * nums[i];
                const second = nums[i];
                storeMaxMin = [first, second].sort((a,b) => a-b);
                if (result < storeMaxMin[1]) result = storeMaxMin[1];
                continue;
            }
            const first = storeMaxMin[0] * nums[i];
            const second = storeMaxMin[1] * nums[i];
            storeMaxMin = [first, second].sort((a,b) => a-b);
            if (result < storeMaxMin[1]) result = storeMaxMin[1];
            continue;
        }
        product *= nums[i];
        if (result < product) result = product;
    }
    return result;
};

// let nums = [2,3,-2,4];
let nums = [0,-2,-3];
// let nums = [1,0,-1,2,3,-5,-2];
console.log(maxProduct(nums));