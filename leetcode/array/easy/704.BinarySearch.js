// https://leetcode.com/problems/binary-search/

var search = function(nums, target) {
    return nums.indexOf(target);
};


let nums = [-1,0,3,5,9,12], target = 9;
let result = search(nums, target);

console.log(result);