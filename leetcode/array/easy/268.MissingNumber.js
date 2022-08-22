// https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    for (let i = nums.length ; i >= 0; i--) {
        let found = nums.indexOf(i);
        if (found === -1) {
            return i;
        }
    }  
}