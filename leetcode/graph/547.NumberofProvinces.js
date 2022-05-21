// https://leetcode.com/problems/number-of-provinces/

var findCircleNum = function (M) {
    let circles = 0;
    const visited = {};
  
    const dfs = (i) => {
      for (let j = 0; j < M.length; j++) {
        if (M[i][j] && !visited[j]) {
          visited[j] = true;
          dfs(j);
        }
      }
    };
  
    for (let i = 0; i < M.length; i++) {
      if (!visited[i]) {
        circles++;
        dfs(i);
      }
    }
  
    return circles;
  };

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]))