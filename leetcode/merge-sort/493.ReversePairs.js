// https://leetcode.com/problems/reverse-pairs/


let merge = (arr1, arr2, numReversePairs) => {
    let sort = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > 2 * arr2[j]) {
            numReversePairs.count += (arr1.length - i);
            j++
        } else {
            i++
        }
    }
    i = 0;
    j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] < arr1[i]) {
            sort.push(arr2[j]);
            j++;
        } else {
            sort.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        sort.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        sort.push(arr2[j]);
        j++;
    }
    return sort;
}

let mergeSort = (list, numReversePairs) => {
    if (list.length <=1) return list;
    let mid = Math.floor(list.length/2);
    let left = mergeSort(list.slice(0, mid), numReversePairs);
    let right = mergeSort(list.slice(mid), numReversePairs);
    return merge(left, right, numReversePairs);
}

var reversePairs = function(nums) {
    let numReversePairs = {count: 0}; 
    mergeSort(nums, numReversePairs);
    return numReversePairs.count;
}

console.log(reversePairs([2,4,3,5,1]))