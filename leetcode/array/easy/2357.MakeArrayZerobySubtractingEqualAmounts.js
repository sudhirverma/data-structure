// https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/

var minimumOperations = function (nums) {
    nums.sort((a, b) => a - b);
    let i = 0;
    let count = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            i++;
            continue;
        }
        let substract = nums[i];
        for (let j = i; j < nums.length; j++) {
            nums[j] -= substract;
        }
        count++;
    }
    return count;
};

let nums = [1, 5, 0, 3, 5];
let result = minimumOperations(nums);
console.log(result);