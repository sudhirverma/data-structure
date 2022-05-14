var networkDelayTime = function(times, n, k) {
    let graph = {};
    let costs = {};
    let parents = {};
    let processed = {};
    let processedCounter = 0;
    
    for (let time of times) {
        if (!graph[time[0]]) {
            graph[time[0]] = {};
        } 
        graph[time[0]][time[1]] = time[2];
        
    }
    
    for (let i = 1; i <= n; i++) {
        costs[i] = Infinity;
        processed[i] = false;
    }
    costs[k] = 0;
  
    let node = k;
    
    while (node !== -1) {
        let cost = costs[node];
        let neighbours = graph[node];
        for (let neighbor in neighbours) {
            let newCostOfNeighbor = cost + neighbours[neighbor];
            if (newCostOfNeighbor < costs[neighbor]) {
                costs[neighbor] = newCostOfNeighbor;
                parents[neighbor] = node;
            }
        }
        processed[node] = true;
        processedCounter++;
        node = findLowestCostNode(costs)
    } 
    
    function findLowestCostNode(costs) {
        lowestCost = Infinity;
        lowestCostNode = -1;
        for (let node in costs) {
            let cost = costs[node];
            if (cost < lowestCost && !processed[node]) {
                lowestCost = cost;
                lowestCostNode = node;
            }
        }
        return lowestCostNode;
    }
    
    if (processedCounter !== n) return -1;

    let set = new Set();
    for (let node in costs) {
	    set.add(costs[node]);
    }
    let max = Math.max(...set);
    
    return max;
};

// const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
// const times = [[1, 2, 1]], n = 2, k = 1;
// const times = [[1, 2, 1]], n = 2, k = 2
// const times = [[1, 2, 1], [2, 3, 2], [1, 3, 2]], n = 3, k = 1; // 2
// const times = [[1, 2, 1], [2, 3, 2], [1, 3, 4]], n = 3, k = 1;
// const times = [[1, 2, 6], [3, 1, 10], [1, 4, 1], [4, 2, 1], [1, 3, 2], [2, 4, 2], [4, 3, 1], [2, 3, 1], [3, 4, 2]], n = 4, k = 1;
const times = [[4, 3, 76], [1, 4, 70], [1, 3, 37], [1, 2, 0], [3, 2, 66], [3, 4, 22], [5, 4, 52], [2, 1, 23], [5, 1, 27], [4, 5, 88], [5, 2, 26], [2, 4, 41], [4, 2, 66], [4, 1, 93], [3, 5, 78], [2, 5, 9], [5, 3, 50], [3, 1, 17], [1, 5, 12], [2, 3, 87]], n = 5, k = 5;

console.log(networkDelayTime(times, n, k))
