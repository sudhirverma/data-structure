// https://leetcode.com/problems/minimum-height-trees/

var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];
    if (n === 2) return edges[0];    
    const adjacency = {};
    for (let i=0; i<edges.length; i++) {
        if (adjacency[edges[i][0]] === undefined) adjacency[edges[i][0]] = [edges[i][1]];
        else adjacency[edges[i][0]].push(edges[i][1]);
        if (adjacency[edges[i][1]] === undefined) adjacency[edges[i][1]] = [edges[i][0]];
        else adjacency[edges[i][1]].push(edges[i][0]);
    }
    
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (adjacency[i]?.length === 1) {
            queue.push(i);
        }
    }
    while (queue.length !== Object.keys(adjacency).length) {
        const currentLevelLength = queue.length;

        for (let i = 0; i < currentLevelLength; i++) {
            const leaf = queue.shift();
            const parentVal = adjacency[leaf][0];
            let parent = adjacency[parentVal];
            delete adjacency[leaf];
            adjacency[parentVal] = parent.filter((val) => {
                return val != leaf
            });
            if (adjacency[parentVal].length === 1) {
                queue.push(parentVal);
            }
        }
    }
    return queue;
};

let n = 4, edges = [[1,0],[1,2],[1,3]]

console.log(findMinHeightTrees(n, edges));