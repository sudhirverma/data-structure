// https://leetcode.com/problems/maximum-number-of-pairs-in-array/

var numberOfPairs = function(nums) {
    let pair = 0;
    let notPair = [];
    let mapPair = {};
    for (let i=0; i<nums.length; i++) {
        if (mapPair[nums[i]] === undefined) {
            mapPair[nums[i]] = i;
        } else {
            delete nums[mapPair[nums[i]]];
            delete mapPair[nums[i]];
            delete nums[i];
            pair++;
        }
    }
    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== undefined) {
            notPair.push(nums[i]);
        }
    }
    return [pair, notPair.length];
};

let nums = [1,3,2,1,3,2,2];
let result = numberOfPairs(nums);
console.log(result);