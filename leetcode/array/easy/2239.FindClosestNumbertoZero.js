// https://leetcode.com/problems/find-closest-number-to-zero/

var findClosestNumber = function(nums) {
    let zero = 0;
    let closestToZeroInNegitavie;
    let closestToZeroInPositive;
    for (let i=0; i<nums.length; i++) {
        if (zero === nums[i]) return nums[i];
        if (closestToZeroInPositive > nums[i] && nums[i] > zero || closestToZeroInPositive === undefined && nums[i] > zero) {
            closestToZeroInPositive = nums[i];
        }
        if (closestToZeroInNegitavie < nums[i] && nums[i] < zero || closestToZeroInNegitavie === undefined && nums[i] < zero) {
            closestToZeroInNegitavie = nums[i];
        }
    }
    if (!closestToZeroInPositive) return closestToZeroInNegitavie;
    if (!closestToZeroInNegitavie) return closestToZeroInPositive;
    if (closestToZeroInNegitavie > -closestToZeroInPositive) return closestToZeroInNegitavie;
    return closestToZeroInPositive;
};

let nums = [-4,-2,1,4,8];
let result = findClosestNumber(nums);
console.log(result);