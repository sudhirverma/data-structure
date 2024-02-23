// https://leetcode.com/problems/set-matrix-zeroes/



var findZeroes = function (matrix, m = 0, n = 0, visited = {}) {
    const key = `${m}:${n}`;
    if (visited[key]) return;
    visited[key] = true;
    if (matrix[m][n] === 0) setMatrixZeroes(matrix, m, n, visited);
    findZeroes(matrix, m + 1, n, visited);
    findZeroes(matrix, m - 1, n, visited);
    findZeroes(matrix, m, n + 1, visited);
    findZeroes(matrix, m, n - 1, visited);
    return matrix;
};

let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
console.log(findZeroes(matrix));