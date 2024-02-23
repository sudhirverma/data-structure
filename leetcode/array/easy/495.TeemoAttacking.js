// https://leetcode.com/problems/teemo-attacking/


var findPoisonedDuration = function (timeSeries, duration) {
    let count = 0;
    for (let t = 0; t < timeSeries.length; t++) {
        if (timeSeries[t + 1] === undefined) {
            count += duration;
            continue;
        }
        if (timeSeries[t] === timeSeries[t + 1]) continue;
        if (timeSeries[t + 1] - timeSeries[t] >= duration) {
            count += duration;
        } else {
            count += timeSeries[t + 1] - timeSeries[t];
        }
    }
    return count;
};

// let timeSeries = [1, 2], duration = 2;
let timeSeries = [1, 4], duration = 2;

let result = findPoisonedDuration(timeSeries, duration);

console.log(result);