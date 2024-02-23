// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        }
        if (sum > target) {
            right -= 1;
            continue;
        }
        left += 1;
    }
};

let numbers = [2, 7, 11, 15], target = 9;
console.log(twoSum(numbers, target));