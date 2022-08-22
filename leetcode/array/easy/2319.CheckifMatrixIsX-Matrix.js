// https://leetcode.com/problems/check-if-matrix-is-x-matrix/

var checkXMatrix = function(grid) {
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            let leftDiagonal = grid[i].length - 1;
            if (i === j && grid[i][j] !== 0 || j === leftDiagonal - i && grid[i][j] !== 0) {
                continue;
            }
            if (i === j && grid[i][j] === 0 || j === leftDiagonal - i && grid[i][j] === 0) {
                return false;
            }
            if (grid[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
};

let grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]];
let result = checkXMatrix(grid);
console.log(result);