// https://leetcode.com/problems/triangle/

//   [ -1]       [-1+1] [-1+0]
//  [2 , 3]   [1]   [0]
// [1,-1,-3]

var minimumTotal = function(triangle) {
    for (let i=triangle.length - 2; i>=0; i--) {
        let j = 0;
        while (j < triangle[i].length) {
            const first = triangle[i][j] + triangle[i+1][j];
            const second = triangle[i][j] + triangle[i+1][j+1];
            const min = Math.min(first, second);
            triangle[i][j] = min;
            j++;
        }
    }
    return triangle[0][0];
};

// let triangle = [[-1],[2,3],[1,-1,-3]];
let triangle = [[-10], [1,2]];
// let triangle = [[2],[3,4],[6,5,7],[4,1,8,3]];
console.log(minimumTotal(triangle));