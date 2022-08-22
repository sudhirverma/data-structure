// https://leetcode.com/problems/remove-duplicates-from-sorted-array/


var removeDuplicates = function(nums) {
    let hash = {};
    for (let i = 0; i< nums.length; i++) {
        if (hash[nums[i]]) {
            nums.splice(i,1);
            i--;
        } else {
            hash[nums[i]] = true;
        }
    }
    return nums;
};

// nums = [1,1,2]
nums = [0,0,1,1,1,2,2,3,3,4]
let result = removeDuplicates(nums);

console.log(result);
