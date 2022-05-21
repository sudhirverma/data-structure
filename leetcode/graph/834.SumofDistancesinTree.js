// https://leetcode.com/problems/sum-of-distances-in-tree/

var sumOfDistancesInTree = function(n, edges) {
    if (!edges.length) return [0]
    let hash = {};
    let position = 0;
    let result = [];
    let stack = [];
    let count = 0;
    let currentNode;
    let visited = {};
    for (let i = 0; i < edges.length; i++) {
        if (!hash[edges[i][0]]) {
            hash[edges[i][0]] = [edges[i][1]];
        } else {
            hash[edges[i][0]].push(edges[i][1]);
        }
        if (!hash[edges[i][1]]) {
            hash[edges[i][1]] = [edges[i][0]];
        } else {
            hash[edges[i][1]].push(edges[i][0]);
        }
    }
    function dfs(nodeValue) {
        if(!visited[nodeValue]) {
            stack.push(nodeValue)
            position = position + stack.length - 1;
            visited[nodeValue] = true;
        }
        for(let node of Object.values(hash[nodeValue]))  {
            if (currentNode === node) continue;
            if (visited[node]) continue;
            if (!visited[node]) {
                if (hash[node].length === 1) {
                    stack.push(node);
                    position = position + stack.length - 1;
                    visited[node] = true;
                    stack.pop();
                    continue;
                }
                count++
                dfs(node);
            }
        }
        stack.pop();
        if (nodeValue === currentNode) {
            result.push(position)
        }
    }
    for (let node=0; node< n; node++) {
        position = 0;
        visited = {};
        currentNode = node;
        dfs(node);
    }
    return result;
};

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]));