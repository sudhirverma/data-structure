// https://leetcode.com/problems/find-if-path-exists-in-graph/

var validPath = function (n, edges, source, destination) {
    let adjacency = {};
    for (let i = 0; i < edges.length; i++) {
        if (!adjacency[edges[i][0]]) adjacency[edges[i][0]] = [edges[i][1]];
        else adjacency[edges[i][0]].push(edges[i][1]);
        if (!adjacency[edges[i][1]]) adjacency[edges[i][1]] = [edges[i][0]];
        else adjacency[edges[i][1]].push(edges[i][0]);
    }
    return travesal(adjacency, source, destination, memo = {});
};

function travesal(adjacency, source, destination, memo = {}) {
    if (source === destination) return true;
    if (memo[source]) return false;
    else memo[source] = true;
    for (let i = 0; i < adjacency[source].length; i++) {
        const result = travesal(adjacency, adjacency[source][i], destination, memo);
        if (result) return result;
    }
    return false;
}

// let n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
let n = 6, edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], source = 0, destination = 5

console.log(validPath(n, edges, source, destination));

