// https://leetcode.com/problems/count-of-smaller-numbers-after-self/


var countSmaller = function(nums) {
    var countAfterSelf = [],
        sortedArr = [],
        i;
    for (i = nums.length - 1; i >= 0; i--) {
        countAfterSelf.unshift(insertSorted(sortedArr, nums[i]));
    }
    return countAfterSelf;
};

function insertSorted (arr, val) {
    var start = 0,
        end = arr.length - 1,
        mid,
        insertIndex; 
    if (arr.length === 0 || arr[end] < val) {
        arr.push(val);
        return end + 1;
    }
    if (arr[start] >= val) {
        arr.unshift(val);
        return 0;
    }
    while (start + 1 < end) {
        mid = start + parseInt((end - start) / 2);
        if (arr[mid] < val) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    if (arr[start] >= val) {
        insertIndex = start;
    } else {
        insertIndex = end;
    }
    arr.splice(insertIndex, 0, val);
    return insertIndex;
}

countSmaller([5,2,6,1]);