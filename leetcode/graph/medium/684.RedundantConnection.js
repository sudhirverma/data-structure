// https://leetcode.com/problems/redundant-connection/

function find(n, pair) {
    let p = pair[n];
    while (p !== pair[p]) {
        pair[p] = pair[pair[p]];
        p = pair[p];
    }
    return p;
}

function union(n1, n2, pair, rank) {
    let find1 = find(n1, pair);
    let find2 = find(n2, pair);
    if (find1 === find2) return false;
    if (rank[find1] > rank[find2]) {
        pair[find2] = find1;
        rank[find1] += rank[find2];
    } else {
        pair[find1] = find2;
        rank[find2] += rank[find1];
    }
    return true;
}

var findRedundantConnection = function(edges) {
    let pair = [];
    let rank = [];
    for (let i=0; i<=edges.length; i++) {
        pair[i] = i;
        rank.push(1);
    }
    for (let i=0; i<edges.length; i++) {
        if (!union(edges[i][0], edges[i][1], pair, rank)) {
            return edges[i];
        }
    }
};


// let edges = [[1,2],[1,3],[2,3]];
// let edges = [[1,2],[2,3],[3,4],[1,4],[1,5]];
let edges = [[7,8],[2,6],[2,8],[1,4],[9,10],[1,7],[3,9],[6,9],[3,5],[3,10]];
console.log(findRedundantConnection(edges));