// https://leetcode.com/problems/subsets/

const createSubsets = (nums, start, result) => {
    if (start === nums.length) return result;
    const temp = result;
    result = [];
    for (let i=0; i<temp.length; i++) {
        result.push([...temp[i]]);
        result.push([...temp[i].concat(nums[start])]);
    }
    return createSubsets(nums, ++start, result);
}

var subsets = function(nums) {
    return createSubsets(nums, 0, [[]]);
};

let nums = [1,2,3];
console.log(subsets(nums));