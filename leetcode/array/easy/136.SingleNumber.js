// https://leetcode.com/problems/single-number/submissions/

var singleNumber = function (nums) {
    let hash = {
        duplicate: {},
        notduplicate: {}
    }
    for (let i = 0; i < nums.length; i++) {
        if (!hash.notduplicate[nums[i]] && !hash.duplicate[nums[i]]) {
            hash.notduplicate[nums[i]] = 'unique';
        } else {
            delete hash.notduplicate[nums[i]];
            hash.duplicate[nums[i]] = 'duplicate';
        }
    }
    return Object.keys(hash.notduplicate)[0];
};

let nums = [2,2,1]
let result = singleNumber(nums);

console.log(result);
