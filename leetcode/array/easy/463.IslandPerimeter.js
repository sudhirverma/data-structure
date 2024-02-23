// https://leetcode.com/problems/island-perimeter/

function perimeter(row, col, findLand, visited) {
  if (!findLand?.[row]?.[col]) {
    return 1;
  };

  if (visited[row][col]) {
    return 0;
  }

  if (!visited[row][col]) {
    visited[row][col] = true;
  }

  let up = perimeter(row - 1, col, findLand, visited);
  let down = perimeter(row + 1, col, findLand, visited);
  let left = perimeter(row, col - 1, findLand, visited);
  let right = perimeter(row, col + 1, findLand, visited);

  return up + down + left + right;

}

var islandPerimeter = function (grid) {
  let visited = Array(grid.length).fill([]).map(() => Array(grid[0].length).fill());
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (!visited[row][col] && grid[row][col]) {
        return perimeter(row, col, grid, visited);
      }
    }
  }
};

let grid = [
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0]];
// let grid = [[1]];
// let grid = [[1,0]];

const result = islandPerimeter(grid);

console.log(result)

