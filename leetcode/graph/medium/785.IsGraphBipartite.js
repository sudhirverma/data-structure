// https://leetcode.com/problems/is-graph-bipartite/


var isBipartite = function(graph) {
    for (let i=0; i<graph.length; i++) {
        const result = bsf(graph, visited = {}, queue = [i]);
        if (!result) return result;
    }
    return true;
};

function bsf(graph, visited, queue) {
    let result = true;
    while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited[vertex]) visited[vertex] = 'red';
        graph[vertex].map(value => {
            if (visited[value] === visited[vertex]) {
                result = false;
                return;
            }
            if (!visited[value]) {
                visited[value] = visited[vertex] === 'red' ? 'blue' : 'red';
                queue.push(value);
            }
        });
        if (!result) return result;
    }
    return result;
}


// let graph = [[1,2,3],[0,2],[0,1,3],[0,2]];
// let graph = [[1,3],[0,2],[1,3],[0,2]];
let graph = [[],[2,4,6],[1,4,8,9],[7,8],[1,2,8,9],[6,9],[1,5,7,8,9],[3,6,9],[2,3,4,6,9],[2,4,5,6,7,8]];
console.log(isBipartite(graph));