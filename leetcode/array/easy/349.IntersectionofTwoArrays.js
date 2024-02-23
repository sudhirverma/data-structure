// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function (nums1, nums2) {
    let result = [];
    let rememberVisitedNumber = {}
    for (let i = 0; i < nums1.length; i++) {
        const found = nums2.indexOf(nums1[i]);
        if (found !== -1 && !rememberVisitedNumber[nums1[i]]) {
            result.push(nums1[i]);
            rememberVisitedNumber[nums1[i]] = true;
        }
    }
    return result;
};

// let nums1 = [1,2,2,1], nums2 = [2,2];
let nums1 = [4,9,5], nums2 = [9,4,9,8,4]

console.log(intersection(nums1, nums2))