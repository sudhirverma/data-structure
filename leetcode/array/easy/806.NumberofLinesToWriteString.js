// https://leetcode.com/problems/number-of-lines-to-write-string/

var numberOfLines = function (widths, s) {

    let result = [];
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        count += widths[s.charCodeAt(i) - 97];
        if (count > 100) {
            count -= widths[s.charCodeAt(i) - 97];
            result.push(count);
            count = widths[s.charCodeAt(i) - 97];
        }
    }
    if (count > 0) {
        result.push(count);
    }
    return [result.length, Math.min(...result)]
};

let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], s = "abcdefghijklmnopqrstuvwxyz";
let result = numberOfLines(widths, s);

console.log(result);