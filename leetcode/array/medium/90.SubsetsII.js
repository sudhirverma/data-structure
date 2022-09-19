// https://leetcode.com/problems/subsets-ii/


function findSubSet(nums, result, start) {
    if (start === nums.length) return result;
    const temp = result;
    result = [];
    for (let i=0; i<temp.length; i++) {
        if (temp[i][temp[i].length - 1] !== nums[start]) {
            result.push([...temp[i]]);
        }
        result.push([...temp[i].concat(nums[start])]);
    }
    return findSubSet(nums, result, ++start);
}

var subsetsWithDup = function(nums) {
    return findSubSet(nums.sort((a,b) => a-b), [[]], 0);
};


let nums = [1,2,2];
console.log(subsetsWithDup(nums));