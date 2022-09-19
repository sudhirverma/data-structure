// https://leetcode.com/problems/rotate-image/

var rotate = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;  
    for (let i = m - 1; i >= 0; i--) {
        for (let j = 0; j < n; j++) {
            matrix[j].push(matrix[i].shift());
        }
    }
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// let matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
const result = rotate(matrix);
console.log(result);
