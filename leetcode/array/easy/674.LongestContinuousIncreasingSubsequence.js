// https://leetcode.com/problems/longest-continuous-increasing-subsequence/

var findLengthOfLCIS = function (nums) {
    if (nums.length === 1) return 1;
    let LongestContinuousSubsequence = [];
    let longestSubsequence = 1;
    let prev;
    for (let i = 0; i <= nums.length; i++) {
        if (prev === undefined) {
            prev = nums[i];
            continue;
        }
        if (nums[i] > prev) {
            longestSubsequence++;
            prev = nums[i];
        } else {
            LongestContinuousSubsequence.push(longestSubsequence);
            longestSubsequence = 1;
            prev = nums[i];
        }
    }
    return Math.max(...LongestContinuousSubsequence);
};

let nums = [1, 3, 5, 4, 7];

let result = findLengthOfLCIS(nums);

console.log(result);