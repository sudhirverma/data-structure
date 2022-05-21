// https://leetcode.com/problems/course-schedule/

var canFinish = function(numCourses, prerequisites) {

    const hash = {};

    for (let course = 0; course < numCourses; course++) {
        hash[course] = [];
    }

    for (let [course, prereq] of prerequisites) {
        hash[course].push(prereq);
    }

    const visited = new Set(); // used for cycle detection

    const dfs = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (hash[course].length === 0) {
            return true;
        }
        visited.add(parseInt(course));
        for (let prereq of hash[course]) {
            if (!dfs(prereq)) {
                return false;
            }
        }
        visited.delete(course);
        hash[course] = []; // this represents that the course has been validated
        return true;
         
    }

    for (const course in hash) { 
        // we need to go through each course in the case of unconnected graph 
        if (!dfs(course)) {
            return false;
        }
    }
    
    
    return true 
};

console.log(canFinish(2, [[1,0]]));