// https://leetcode.com/problems/min-max-game/

var minMaxGame = function(nums) {
    let newNums = [];
    let checkOddEven = 0;
    while (nums.length > 1) {
        for (let i=1; i<nums.length; i +=2) {
            if (checkOddEven%2===0) {
                newNums.push(Math.min(nums[i-1], nums[i]));
                checkOddEven = 1;
                continue;
            }
            newNums.push(Math.max(nums[i-1], nums[i]));
            checkOddEven = 0;
        }
        nums = newNums;
        newNums = [];
        checkOddEven = 0;
    }
    return nums[0];
};

let nums = [1,3,5,2,4,8,2,2];
let result = minMaxGame(nums);
console.log(result);