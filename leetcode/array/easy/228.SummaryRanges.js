// https://leetcode.com/problems/summary-ranges/

var summaryRanges = function (nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return [`${nums}`];
    let result = [];
    let rememberNumber;
    for (let i = 0; i < nums.length; i++) {
        if (rememberNumber === undefined) {
            rememberNumber = nums[i];
            continue;
        }

        if (nums[i] - nums[i - 1] !== 1) {
            if (rememberNumber === nums[i - 1]) {
                result.push(`${rememberNumber}`);
            } else {
                result.push(`${rememberNumber}->${nums[i - 1]}`);
            }
            nums.splice(0, i);
            rememberNumber = undefined;
            i = -1;
        }
    }
    if (nums.length === 1) result.push(`${nums}`);
    if (nums.length > 1) result.push(`${nums[0]}->${nums[nums.length - 1]}`);
    return result;
};

let nums = [0, 1, 2, 4, 5, 7];

console.log(summaryRanges(nums));
