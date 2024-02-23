// https://leetcode.com/problems/network-delay-time/description/


// // BFS
var networkDelayTime = function (times, n, k) {
    const distances = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    distances[0] = 0;
    distances[k] = 0;

    const travels = new Array(n + 1).fill().map(() => []);

    times.forEach(t => {
        travels[t[0]].push([t[1], t[2]]);
    });

    const queueNode = [k];

    while (queueNode.length > 0) {
        const topNode = queueNode.shift();

        travels[topNode].forEach(c => {
            if (distances[topNode] + c[1] < distances[c[0]]) {
                distances[c[0]] = distances[topNode] + c[1];
                queueNode.push(c[0]);
            }
        });
    }
    const max = Math.max(...distances);

    if (max === Number.MAX_SAFE_INTEGER) {
        return -1;
    }

    return max;
}


let times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2;
console.log(networkDelayTime(times, n, k));