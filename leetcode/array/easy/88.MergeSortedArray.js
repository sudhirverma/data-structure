// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
    let lengthNums1 = 0;
    let lengthNums2 = 0;
    while (m < nums1.length) {
        nums1.pop();
    }
    while (n < nums2.length) {
        nums2.pop();
    }
    while (lengthNums1 < nums1.length && lengthNums2 < nums2.length) {
        if (nums1[lengthNums1] <= nums2[lengthNums2]) {
            lengthNums1++;
        } else {
            nums1.splice(lengthNums1, 0, nums2[lengthNums2]);
            nums2.shift();
        }
    }
    while (nums2.length) {
        const value = nums2.shift();
        nums1.push(value);
    }
    return nums1;
};

console.log(merge([4, 0, 0, 0, 0, 0], 2, [1, 2, 3, 5, 6], 5))