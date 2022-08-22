// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function(nums) {
    if (nums.length === 0) return 0;
    let hash = {
        1: 0
    };
    let count = 0;
    for (let i=0; i<nums.length; i++) {
        if (nums[i]) {
            count++;
        } else {
            if (hash[1] < count) hash[1] = count;
            count = 0;
        }
    }
    if (hash[1] < count) hash[1] = count;
    return hash[1];
};

let nums = [1]

let result = findMaxConsecutiveOnes(nums);
console.log(result);