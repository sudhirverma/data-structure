// https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i,1);
            i--;
        }
    }
};


let numList = [3,2,2,3]
let val = 3
console.log(removeElement(numList, val));