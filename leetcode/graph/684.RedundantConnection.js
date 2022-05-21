// https://leetcode.com/problems/redundant-connection/

var findRedundantConnection = function(edges) {
    let map = {};
    let currRedundant = null;
    
    const dfs = (u, v, visited) => {
        visited.add(u);
        
        if (u in map){
            if (map[u].has(v)) return true;
            for (let w of map[u]){
                if (!visited.has(w)){
                    visited.add(w);
                    if (dfs(w, v, visited)) return true;
                }
            }
            return false;
        }
        return false;
    }
    
    for (let edge of edges){
        let [u, v] = edge;
        
        if (dfs(u, v, new Set())) currRedundant = edge;
        
        if (!(u in map)) map[u] = new Set();
        if (!(v in map)) map[v] = new Set();
        
        map[u].add(v);
        map[v].add(u);
    }
    
    return currRedundant;
};

// console.log(findRedundantConnection([[1,2],[1,3],[2,3]]))
// console.log(findRedundantConnection([[2, 1], [3, 1], [4, 2], [1, 4]]))
console.log(findRedundantConnection([[4, 2], [1, 5], [5, 2], [4, 3], [4, 1]]))