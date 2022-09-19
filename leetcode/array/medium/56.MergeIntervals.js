// https://leetcode.com/problems/merge-intervals/

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let prev;
    for (let i=0; i<intervals.length; i++) {
        if (!prev) {
            prev = intervals[i];
            continue;
        }
        if (intervals[i][1] <= prev[1]) {
            intervals.splice(i,1);
            i--;
            continue;
        }
        if (intervals[i][0] <= prev[1] && intervals[i][1] >= prev[0]) {
            intervals[i-1][1] =  intervals[i][1];
            intervals.splice(i,1);
            i--;
            prev = intervals[i];
            continue;
        }
        prev = intervals[i]
    }
    return intervals;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
// let intervals = [[1,4],[4,5]];
let result = merge(intervals);
console.log(result);