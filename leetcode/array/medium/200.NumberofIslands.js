// https://leetcode.com/problems/number-of-islands/

// ["1","1","1","1","0"],
// ["1","1","0","1","0"],
// ["1","1","0","0","0"],
// ["0","0","0","0","0"]

const findIsland = (m, n, grid, visited) => {
    if (grid[m]?.[n] === undefined) return;
    const key = `${m}:${n}`;
    if (parseInt(grid[m][n]) === 0) {
        visited[key] = true;
        return;
    }
    if (visited[key]) return;
    visited[key] = true;
    findIsland(m, n+1, grid, visited);
    findIsland(m, n-1, grid, visited);
    findIsland(m+1, n, grid, visited);
    findIsland(m-1, n, grid, visited);
}

var numIslands = function(grid) {
    let visited = {};
    let count = 0;
    for (let i=0; i<grid.length; i++) {
        for (j=0; j<grid[i].length; j++) {
            const key = `${i}:${j}`
            if (parseInt(grid[i][j]) === 0) visited[key] = true;
            if (!visited[`${i}:${j}`]) {
                count +=1;
                findIsland(i, j, grid, visited);
            }
        }
    }
    return count;
};

let grid = [["1","1","1","1","0"],["1","1","0","0","0"],["1","1","0","1","0"],["0","0","0","0","0"]]
console.log(numIslands(grid));