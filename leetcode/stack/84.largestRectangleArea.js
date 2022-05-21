// https://leetcode.com/problems/largest-rectangle-in-histogram/


var largestRectangleArea = function(heights) {
    let size = heights.length;
    let stack = [];
    let leftSmaller = new Array(size).fill(0);
    let rightSmaller = new Array(size).fill(0);
    
    // Left Boundary
    for(let i = 0; i < size; i++) {
        while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if(!stack.length) {
            leftSmaller[i] = 0;
        } else {
            leftSmaller[i] = stack[stack.length - 1] + 1;
        }
        stack.push(i);
    }
    
    stack = [];
    
    // Right boundary
    for(let i = size - 1; i >= 0; i--) {
        while(stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if(!stack.length) {
            rightSmaller[i] = size - 1;
        } else {
            rightSmaller[i] = stack[stack.length - 1] - 1;
        }
        stack.push(i);
    }
    
    // Finding maxArea
    let maxArea = 0;
    for(let i = 0; i < size; i++) {
        maxArea = Math.max(maxArea, heights[i] * (rightSmaller[i] - leftSmaller[i] + 1))
    }
    return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]));