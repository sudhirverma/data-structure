// https://leetcode.com/problems/evaluate-division/description/

var calcEquation = function(equations, values, queries) {
    let adjacency = {};
    const result = [];
    for (let i=0; i<equations.length; i++) {
        const firstKey = equations[i][1];
        if (adjacency[equations[i][0]] === undefined) {
            adjacency[equations[i][0]] = {};
            adjacency[equations[i][0]][firstKey] = values[i];
        } else adjacency[equations[i][0]][firstKey] = values[i];
        const secondKey = equations[i][0];
        if (adjacency[equations[i][1]] === undefined) {
            adjacency[equations[i][1]] = {};
            adjacency[equations[i][1]][secondKey] = 1/values[i];
        } else adjacency[equations[i][1]][secondKey] = 1/values[i];
    }
    for (let i=0; i<queries.length; i++) {
        const productValue = dfs(queries[i][0], queries[i][1], adjacency, 1, memo={});
        result.push(productValue);
    }
    return result;
};

function dfs(start, end, adjacency, product, momo) {
    if (memo[start]) return null;
    else memo[start] = true;
    let startValue = adjacency[start];
    if (startValue === undefined) return -1;
    let endValue = adjacency[start][end];
    if (endValue !== undefined) return product*endValue;
    let key = Object.keys(startValue);
    for (let i=0; i<key.length; i++) {
        const result = dfs(key[i], end, adjacency, product*startValue[key[i]], momo);
        if (result !== null && result !== -1) return result;
    }
    return -1;
}

// let equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// let equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
// let equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
let equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]], values = [3.0,4.0,5.0,6.0], queries = [["x2","x4"]];
console.log(calcEquation(equations, values, queries));