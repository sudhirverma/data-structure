// https://leetcode.com/problems/spiral-matrix/

// [ 1, 2, 3, 4, 5]
// [ 6, 7, 8, 9,10]
// [11,12,13,14,15]
// [16,17,18,19,20]
// [21,22,23,24,25]

const storeRightSpriral = function(x, y, matrix, visited, result) {
    const checkDuplicate = createSpriral(x, y, matrix, visited, result);
    if (checkDuplicate) return;
    storeRightSpriral(x, y+1, matrix, visited, result);
    storeDownSpriral(x+1, y, matrix, visited, result)
}
const storeDownSpriral = function(x, y, matrix, visited, result) {
    const checkDuplicate = createSpriral(x, y, matrix, visited, result);
    if (checkDuplicate) return;
    storeDownSpriral(x+1, y, matrix, visited, result);
    storeLeftSpriral(x, y-1, matrix, visited, result) 
}
const storeLeftSpriral = function(x, y, matrix, visited, result) {
    const checkDuplicate = createSpriral(x, y, matrix, visited, result);
    if (checkDuplicate) return;
    storeLeftSpriral(x, y-1, matrix, visited, result);
    storeUpSpriral(x-1, y, matrix, visited, result)
}
const storeUpSpriral = function(x, y, matrix, visited, result) {
    const checkDuplicate = createSpriral(x, y, matrix, visited, result);
    if (checkDuplicate) return;
    storeUpSpriral(x-1, y, matrix, visited, result);
    storeRightSpriral(x, y+1, matrix, visited, result)
}

const createSpriral = function(x, y, matrix, visited, result) {
    if (matrix?.[x]?.[y] === undefined || visited[`${x}${y}`]) return true;
    if (!visited[`${x}${y}`]) {
        result.push(matrix[x][y]);
        visited[`${x}${y}`] = true;
        return false;
    }
    return true;
}

var spiralOrder = function(matrix) {
    const result = [];
    const visited = {};
    storeRightSpriral(0, 0, matrix, visited, result);
    return result;
};

let matrix =  [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
// let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
const result = spiralOrder(matrix);
console.log(result);