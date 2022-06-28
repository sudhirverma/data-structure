//https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
    let hash = {};
    for (let i=1; i<=nums.length; i++) {
        let numValue = nums[i-1];
        if (!hash[numValue]) {
            hash[numValue] = i;
        } else {
            if (i - hash[numValue] <= k ) {
                return true;
            } else {
                hash[numValue] = i;
            }
        }
    }
    return false;
};