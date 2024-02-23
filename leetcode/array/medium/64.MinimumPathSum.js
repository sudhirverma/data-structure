// https://leetcode.com/problems/minimum-path-sum/


const findMinimumPath = (m, n, grid, cache) => {
    console.log(`${m}:${n}`);
    if (grid?.[m]?.[n] === undefined) return Number.MAX_SAFE_INTEGER;
    if (m === grid.length - 1 && n === grid[0].length - 1) {
        return grid[m][n];
    }
    const key = `${m}:${n}`;
    if (cache[key] !== undefined) return cache[key];
    const right = findMinimumPath(m, n + 1, grid, cache);
    const left = findMinimumPath(m + 1, n, grid, cache);
    grid[m][n] += Math.min(right, left);
    cache[key] = grid[m][n];
    return cache[key];
}

var minPathSum = function (grid) {
    return findMinimumPath(0, 0, grid, cache = {});
};

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
const result = minPathSum(grid);
console.log(result);