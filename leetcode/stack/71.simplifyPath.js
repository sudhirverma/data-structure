// https://leetcode.com/problems/simplify-path/

var simplifyPath = function (path) {
    let array = path.split("/");
    console.log(array)
    let stack = [];
    for (let char of array) {
        if (char === "..") {
            stack.pop();
        } else if (char !== "" && char !== ".") {
            console.log(char)
            stack.push("/" + char);
        }
    }

    if (stack.length === 0) {
        return "/";
    } else {
        return stack.join("");
    }
};