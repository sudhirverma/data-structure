// https://leetcode.com/problems/intersection-of-two-arrays-ii/

var intersect = function(nums1, nums2) {
    let result = [];
    for (let i=0; i<nums1.length; i++) {
        let found = nums2.indexOf(nums1[i]);
        if (found !== -1) {
            nums2.splice(found, 1);
            result.push(nums1[i]);
        }
    }
    return result;
};