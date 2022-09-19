// https://leetcode.com/problems/jump-game-ii/

var jump = function(nums) {
    let currentReach = 0;
    let maxReach = 0;
    let numSteps = 0;
    
    for (let x = 0; x < nums.length; x++) {
        maxReach = Math.max(maxReach, x + nums[x]);
        
        if (currentReach >= nums.length - 1)
            return numSteps;
        
        if (x === currentReach) {
            numSteps++;
            currentReach = maxReach;
        }
    }
    
    return numSteps;
};

let nums = [2,3,1,1,4]
// let nums = [2,3,0,1,4];
// let nums = [1,1,1,1,4];
// let nums = [1,2,1,1,1];
// let nums = [8,2,4,4,4,9,5,2,5,8,8,0,8,6,9,1,1,6,3,5,1,2,6,6,0,4,8,6,0,3,2,8,7,6,5,1,7,0,3,4,8,3,5,9,0,4,0,1,0,5,9,2,0,7,0,2,1,0,8,2,5,1,2,3,9,7,4,7,0,0,1,8,5,6,7,5,1,9,9,3,5,0,7,5];
const result = jump(nums);
console.log(result);