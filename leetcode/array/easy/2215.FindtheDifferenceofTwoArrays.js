// https://leetcode.com/problems/find-the-difference-of-two-arrays/

var findDifference = function(nums1, nums2) {
    let mapNumber1 = {};
    let mapNumber2 = {};
    for (let i=0; i<nums1.length; i++) {
        if (mapNumber1[nums1[i]] === undefined) {
            mapNumber1[nums1[i]] = true;
            continue;
        }
        nums1.splice(i,1);
        i--;
    }
    for (let i=0; i<nums2.length; i++) {
        if (mapNumber2[nums2[i]] === undefined) {
            mapNumber2[nums2[i]] = true;
            continue;
        }
        nums2.splice(i,1);
        i--;
    }
    for (let i=0; i<nums1.length; i++) {
        if (mapNumber2[nums1[i]]) {
            nums1.splice(i,1);
            i--;
        }
    }
    for (let i=0; i<nums2.length; i++) {
        if (mapNumber1[nums2[i]]) {
            nums2.splice(i,1);
            i--;
        }
    }
    return [nums1, nums2];
};

let nums1 = [1,2,3], nums2 = [2,4,6];
let result = findDifference(nums1, nums2);
console.log(result);