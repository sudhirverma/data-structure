// https://leetcode.com/problems/course-schedule/

var canFinish = function(numCourses, prerequisites) {
    let hash = {}
    for (let i=0; i<prerequisites.length; i++) {
        if (hash[prerequisites[i][0]] === undefined) {
            hash[prerequisites[i][0]] = [prerequisites[i][1]];
            continue;
        }
        hash[prerequisites[i][0]].push(prerequisites[i][1]);
    }
    let key = Object.keys(hash);
    let memo = {}
    for (let i=0; i< key.length; i++) {
        const result = dfs(key[i], hash, memo);
        if (!result) return false;
    }
    return true;
};

function dfs(value, hash, memo) {
    if (memo[value]) return false;
    if (!hash[value]?.length) return true;
    memo[value] = true;
    for (let i=0; i<hash[value].length; i++) {
        const result = dfs(hash[value][i] , hash, memo);
        if (!result) return false;
    }
    hash[value] = [];
    delete memo[value];
    return true;
}

let numCourses = 2, prerequisites = [[1,0]];
console.log(canFinish(numCourses, prerequisites))