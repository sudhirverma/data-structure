// https://leetcode.com/problems/course-schedule-ii/


var findOrder = (numCourses, prerequisites) => {
    const hash = {};
    for (let courses = 0; courses < numCourses; courses++) {
        hash[courses] = [];
    }
    for (let [course, prereq] of prerequisites) {
        hash[course].push(prereq);
    }
    let courseComplete = [];
    const visited = {};
    const checkNodeVisited = {};
    
    const dfs = (course) => {
        if (visited[course]) {
            return false;
        }
        
        if (hash[course].length === 0) {
            if (!checkNodeVisited[course]) {
                courseComplete.push(course);
                checkNodeVisited[course] = true;
            }
            return true;
        }
        
        visited[course] = true;
        
        for (let prereq of hash[course]) {
            if (!dfs(prereq)) {
                return false;
            }
        }
        delete visited[course];
        hash[course] = [];
        if (!checkNodeVisited[course]) {
            courseComplete.push(course);
            checkNodeVisited[course] = true;
        }
        return true;
    }
    
    for (const course in hash) {
        if (!dfs(course)) {
            return [];
        }
    }
    
    return courseComplete;
};


console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));
