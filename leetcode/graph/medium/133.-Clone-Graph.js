// https://leetcode.com/problems/clone-graph/

var cloneGraph = function (node) {
    return dfs(node, memo = {});
};

function dfs(node, memo) {
    if (!node) return node;
    if (memo[node.val]) return memo[node.val];
    const root = new Node(node.val);
    memo[node.val] = root;
    node.neighbors.forEach(val => {
        return root.neighbors.push(dfs(val, memo));
    })
    return root;
}

let adjList = [[2, 4], [1, 3], [2, 4], [1, 3]];
console.log(cloneGraph(adjList))

