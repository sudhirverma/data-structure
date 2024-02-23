// https://leetcode.com/problems/find-the-town-judge/

var findJudge = function (n, trust) {
    let map = {};
    for (let i = 1; i <= n; i++) {
        map[i] = 0;
    }
    for (let i = 0; i < trust.length; i++) {
        map[trust[i][0]] -= 1;
        map[trust[i][1]] += 1;
    }
    let key = Object.keys(map);
    for (let i = 0; i < key.length; i++) {
        if (map[key[i]] === n - 1) {
            console.log(map[key[i]])
            return parseInt(key[i]);
        }
    }
    return -1;
}

let n = 2, trust = [[1, 2]];
console.log(findJudge(n, trust));