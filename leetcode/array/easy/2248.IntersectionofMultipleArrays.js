// https://leetcode.com/problems/intersection-of-multiple-arrays/

var intersection = function (nums) {
    if (nums.length === 1) return nums[0].sort((a, b) => a - b);
    let result = [];
    let newNum = nums.flat();
    let countNum = {};
    let occurance = nums.length;
    for (let i = 0; i < newNum.length; i++) {
        if (countNum[newNum[i]]) {
            countNum[newNum[i]]++;
            if (countNum[newNum[i]] === occurance) {
                result.push(newNum[i]);
            }
        } else {
            countNum[newNum[i]] = 1;
        }
    }
    return result.sort((a, b) => a - b);
};

let nums = [[1, 2, 3], [4, 5, 6]]
let result = intersection(nums);
console.log(result);