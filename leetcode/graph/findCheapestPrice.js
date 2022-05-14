var findCheapestPrice = function(n, flights, src, dst, noOfStops) {
    const adjacencyList = new Map();
    
    for(let [start, end, cost] of flights) {
        if(adjacencyList.has(start)) adjacencyList.get(start).push([end, cost]);
        else adjacencyList.set(start, [[end, cost]]);
    }
    
    const queue = [[0, src, noOfStops+1]];
    const visited = new Map();
    
    while(queue.length) {
        queue.sort((a, b) => {
            return a[0] - b[0];
        });
        
        const [cost, city, stops] = queue.shift();
        visited.set(city, stops);
        
        if(city === dst) return cost;
        if(stops <= 0 || !adjacencyList.has(city))  continue;
            
        for(let [nextCity, nextCost] of adjacencyList.get(city)) {
            if(visited.has(nextCity) && visited.get(nextCity) >= stops-1) continue;
            queue.push([cost+nextCost, nextCity, stops-1]);
        }
    }
    return -1;
};

// let  n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 0;
let n = 3, flights = [[0,1,100],[1,2,100],[0,2,500]], src = 0, dst = 2, k = 1;
// let n = 4, flights = [[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src = 0, dst = 3, k = 1;

console.log(findCheapestPrice(n, flights, src, dst, k));