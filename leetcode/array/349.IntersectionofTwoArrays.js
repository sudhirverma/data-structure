// https://leetcode.com/problems/intersection-of-two-arrays/

var intersection = function(nums1, nums2) {
    let result = [];
    let rememberVisitedNumber = {}
    for (let i =0; i<nums1.length; i++) {
        const found = nums2.indexOf(nums1[i]);
        if (found !== -1 && !rememberVisitedNumber[nums1[i]]) {
            result.push(nums1[i]);
            rememberVisitedNumber[nums1[i]] = true;
        }
    }
    return result;
};