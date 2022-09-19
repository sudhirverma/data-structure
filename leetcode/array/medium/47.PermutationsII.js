// https://leetcode.com/problems/permutations-ii/


function permutations(num, nums, result, position) {
    result.push(num.concat(...nums.splice(position,1), ...nums));
}

function createpermutations(num, nums, result) {
    for (let i=0; i<nums.length; i++) {
        let copyNums = nums.slice();
        if (copyNums.length > 2) {
            let storePermutation = [];
            createpermutations(num.concat(...copyNums.splice(i,1)), copyNums, storePermutation);
            while (nums[i] === nums[i+1]) i++;
            result.push(...storePermutation);
            continue;
        }
        permutations(num, copyNums, result, i);
        while (nums[i] === nums[i+1]) i++;
    }
}

var permuteUnique = function(nums) {
    if (nums.length === 1) return [nums];
    let result = [];
    nums.sort((a,b) => a-b);
    for (let i=0; i<nums.length; i++) {
        let copyNums = nums.slice();
        createpermutations(copyNums.splice(i,1), copyNums, result);
        while (nums[i] === nums[i+1]) i++;
    }
    return result;
};

// const value = [1,2,3];
const value = [5,4,6,2];
// const value = [0,1];
// const value = [0];
console.log(permuteUnique(value));