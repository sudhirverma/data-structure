// https://leetcode.com/problems/find-center-of-star-graph/

var findCenter = function (edges) {
    let map = {};
    for (let i = 0; i < edges.length; i++) {
        if (map[edges[i][0]] === undefined) map[edges[i][0]] = 1;
        else
            map[edges[i][0]]++;

        if (map[edges[i][1]] === undefined) map[edges[i][1]] = 1;
        else
            map[edges[i][1]]++;
        if (map[edges[i][1]] === edges.length - 1) return edges[i][1];
        if (map[edges[i][0]] === edges.length - 1) return edges[i][0];
    }
};

let edges = [[1, 2], [2, 3], [4, 2]];
console.log(findCenter(edges));