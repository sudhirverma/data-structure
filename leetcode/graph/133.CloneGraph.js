// https://leetcode.com/problems/clone-graph/


var cloneGraph = (node) => {
    
    const visited = {};

    
    const dfs = (node) => {
        if (!node) return node;
        
        if (visited[node.val] !== null) return visited[node.val];

        
        const root = new Node(node.val);
        
        visited[node.val] = root;
        
        node.neighbors.forEach(n => {
           return root.neighbors.push(dfs(n))
        })
        return root;
    }
    
    return dfs(node);
};

console.log(cloneGraph([[2,4],[1,3],[2,4],[1,3]]))