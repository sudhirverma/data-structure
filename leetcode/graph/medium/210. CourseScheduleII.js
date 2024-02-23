// https://leetcode.com/problems/course-schedule-ii/

var findOrder = function (numCourses, prerequisites) {
    const courseOrder = [];
    const hash = {};
    const memo = { visitedCourse: {} };
    for (let i = 0; i < numCourses; i++) hash[i] = [];
    for (let i = 0; i < prerequisites.length; i++) hash[prerequisites[i][0]].push(prerequisites[i][1]);
    const key = Object.keys(hash);
    for (let i = 0; i < key.length; i++) {
        const result = dfs(key[i], hash, courseOrder, memo);
        if (!result) return [];
    }
    return courseOrder;
};

function visitedCourse(value, memo, courseOrder) {
    if (!memo.visitedCourse[value]) {
        memo.visitedCourse[value] = true;
        courseOrder.push(value);
    }
}

function dfs(value, hash, courseOrder, memo) {
    if (memo[value]) return false;
    if (!hash[value]?.length) {
        visitedCourse(value, memo, courseOrder);
        return true;
    }
    memo[value] = true;
    for (let i = 0; i < hash[value].length; i++) {
        const result = dfs(hash[value][i], hash, courseOrder, memo);
        if (!result) return false;
    }
    delete memo[value];
    hash[value] = [];
    if (!memo.visitedCourse[value]) {
        visitedCourse(value, memo, courseOrder);
    }
    return true;
}

let numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]

console.log(findOrder(numCourses, prerequisites));