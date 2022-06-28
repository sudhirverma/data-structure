// https://leetcode.com/problems/next-greater-element-i/


var nextGreaterElement = function(nums1, nums2) {
    let result = [];
    let nextGreater = {}
    for (let i=0; i<nums2.length; i++) {
        let firstVal = nums2[i];
        let found = nums2.slice(i).find((e) => e > firstVal);
        nextGreater[firstVal] = found ?? -1;
    }
    for (let i=0; i<nums1.length; i++) {
        result.push(nextGreater[nums1[i]]);
    }
    return result;
};

let nums1 = [4,1,2], nums2 = [1,3,4,2]

let result = nextGreaterElement(nums1, nums2);
console.log(result);