// https://leetcode.com/problems/network-delay-time/

var networkDelayTime = function(times, n, k) {
    const distances = new Array(n+1).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    distances[k] = 0;
    // [[2, 1, 1], [2, 3, 1], [3, 4, 1]]
    const travels = new Array(n+1).fill().map(() => []);
    
    times.forEach(t => {
        travels[t[0]].push([t[1], t[2]]);
    });
    
    const queueNode = [k];
    
    while(queueNode.length > 0){
        const topNode = queueNode.shift();
        
        travels[topNode].forEach(c => {
            if(distances[topNode]+c[1]<distances[c[0]]){
                distances[c[0]] = distances[topNode]+c[1];
                queueNode.push(c[0]);  
            }
        });
    }
    const max = Math.max(...distances);
    
    if(max === Number.MAX_SAFE_INTEGER){
        return -1;
    }

    return max; 
}

const times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
// const times = [[1, 2, 1]], n = 2, k = 1;
// const times = [[1, 2, 1]], n = 2, k = 2
// const times = [[1, 2, 1], [2, 3, 2], [1, 3, 2]], n = 3, k = 1; // 2
// const times = [[1, 2, 1], [2, 3, 2], [1, 3, 4]], n = 3, k = 1;
// const times = [[1, 2, 6], [3, 1, 10], [1, 4, 1], [4, 2, 1], [1, 3, 2], [2, 4, 2], [4, 3, 1], [2, 3, 1], [3, 4, 2]], n = 4, k = 1;
// const times = [[4, 3, 76], [1, 4, 70], [1, 3, 37], [1, 2, 0], [3, 2, 66], [3, 4, 22], [5, 4, 52], [2, 1, 23], [5, 1, 27], [4, 5, 88], [5, 2, 26], [2, 4, 41], [4, 2, 66], [4, 1, 93], [3, 5, 78], [2, 5, 9], [5, 3, 50], [3, 1, 17], [1, 5, 12], [2, 3, 87]], n = 5, k = 5;

console.log(networkDelayTime(times, n, k))
