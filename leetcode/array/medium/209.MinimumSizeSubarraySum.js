// https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(target, nums) {
    let l = 0, r = 0;
    let length = nums.length;
    let result = Number.MAX_SAFE_INTEGER;
    let sum = 0
    while (l <= length && r <= length) {
        if (sum >= target) {
            let newSize = r-l;
            if (result > newSize) {
                result = newSize;
            }
            sum -= nums[l];
            l++;
            continue;
        }
        if (l === length || r === length) break;
        if (sum < target) {
            sum += nums[r];
            r++;
        }
    }
    if (result === Number.MAX_SAFE_INTEGER) return 0;
    return result
};

let target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums));