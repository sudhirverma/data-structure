// https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);
    let countThirdMax = 0;
    let rememberVisit = {};
    for (let i = 0; i < nums.length; i++) {
        if (!rememberVisit[nums[i]]) {
            rememberVisit[nums[i]] = true;
            countThirdMax++;
            if (countThirdMax === 1) {
                rememberVisit['max'] = nums[i];
            }
        }
        if (countThirdMax === 3) {
            return nums[i];
        }
    }
    return rememberVisit.max;
};

const nums = [3,2,1];

console.log(thirdMax(nums))