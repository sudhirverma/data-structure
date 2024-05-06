// https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/

function isValidSerialization(preorder) {
    const nodes = preorder.split(',');
    const stack = [];

    for (const node of nodes) {
        stack.push(node);

        // Check if the top of the stack forms a pattern like "number,#,#"
        while (stack.length >= 3 &&
            stack[stack.length - 1] === '#' &&
            stack[stack.length - 2] === '#' &&
            stack[stack.length - 3] !== '#') {
            // Pop the pattern and replace it with '#'
            stack.pop(); // Pop #
            stack.pop(); // Pop #
            stack.pop(); // Pop number
            stack.push('#'); // Push #
        }
    }

    // If the stack contains only '#' at the end, it's a valid serialization
    return stack.length === 1 && stack[0] === '#';
}

// Test cases
console.log(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")); // Output: true
console.log(isValidSerialization("1,#")); // Output: false
console.log(isValidSerialization("9,#,#,1")); // Output: false
