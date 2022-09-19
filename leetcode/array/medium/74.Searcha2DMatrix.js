// https://leetcode.com/problems/search-a-2d-matrix/

const findmatrix = (list, target) => {
    const mid = Math.floor(list.length/2);
    const left = list.slice(0, mid);
    const right = list.slice(mid);
    if (left[left.length-1]>= target) {
        if (left[left.length-1] === target) return true;
        return findmatrix(left, target);
    } else if (right[0] <= target){
        if (right[0] === target) return true;
        return findmatrix(right, target);
    }
    return false;
}


var searchMatrix = function(matrix, target, m = 0, n = matrix[0].length - 1) {
    if (matrix[m]?.[n] === undefined) return false;
    if (matrix[m]?.[n] >= target) return findmatrix(matrix[m], target);
    return searchMatrix(matrix, target, m+1, n);
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 2;
console.log(searchMatrix(matrix, target));