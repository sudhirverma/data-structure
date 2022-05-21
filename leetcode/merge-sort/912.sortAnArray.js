// https://leetcode.com/problems/sort-an-array/

let merge = (left, right) => {
    let i = 0;
    let j = 0;
    let sort = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sort.push(left[i]);
            i++;
        } else {
            sort.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        sort.push(left[i]);
        i++;
    }
    
    while (j < right.length) {
        sort.push(right[j]);
        j++;
    }
    return sort;
}


let mergeSort = (nums) => {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length/2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));
    return merge(left, right);
}

var sortArray = function(nums) {
    return mergeSort(nums);
};


console.log(sortArray([5,2,3,1]))