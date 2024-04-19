// https://leetcode.com/problems/simplify-path/description/

var simplifyPath = function(path) {
    const stack = [];
    const components = path.split('/');

    for (const component of components) {
        if (component === '' || component === '.') {
            continue;
        } else if (component === '..') {
            stack.pop();
        } else {
            stack.push(component);
        }
    }
    return '/' + stack.join('/');
}




// Test cases
console.log(simplifyPath("/home/"));  // Output: "/home"
console.log(simplifyPath("/.../"));  // Output: "/"
console.log(simplifyPath("/home//foo/"));  // Output: "/home/foo"