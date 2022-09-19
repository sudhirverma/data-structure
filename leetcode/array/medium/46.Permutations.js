// https://leetcode.com/problems/permutations/


function permutations(num, nums, result, position) {
    result.push(num.concat(...nums.splice(position,1), ...nums));
}

function createpermutations(num, nums, result) {
    for (let i=0; i<nums.length; i++) {
        let copyNums = nums.slice();
        if (copyNums.length > 2) {
            let storePermutation = [];
            createpermutations(num.concat(...copyNums.splice(i,1)), copyNums, storePermutation);
            result.push(...storePermutation);
            continue;
        }
        permutations(num, copyNums, result, i);
    }
}

var permute = function(nums) {
    if (nums.length === 1) return [nums];
    let result = [];
    for (let i=0; i<nums.length; i++) {
        let copyNums = nums.slice();
        createpermutations(copyNums.splice(i,1), copyNums, result);
    }
    return result
};

// const value = [1,2,3];
const value = [5,4,6,2];
// const value = [0,1];
// const value = [0];
console.log(permute(value));
