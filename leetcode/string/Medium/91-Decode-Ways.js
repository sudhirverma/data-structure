// https://leetcode.com/problems/decode-ways

// function numDecodings(s) {
//     if (!s || s[0] === "0") {
//         return 0;
//     }
    
//     const n = s.length;
//     const dp =new Array(n + 1).fill(0);
//     dp[0] = 1;
//     dp[1] = s[0] !== "0" ? 1 : 0;
    
//     for (let i = 2; i <= n; i++) {
//         if (s[i - 1] !== "0") {
//             dp[i] += dp[i - 1];
//         }
        
//         const twoDigits = parseInt(s.substring(i - 2, i));
//         if (10 <= twoDigits && twoDigits <= 26) {
//             dp[i] += dp[i - 2];
//         }
//     }
    
//     return dp[n];
// }

class TreeNode {
    constructor(val, parent = null) {
        this.val = val;
        this.children = [];
        this.parent = parent;
    }
}

function buildTree(s, index, parent) {
    if (index > s.length) {
        return null;
    }
    
    const node = new TreeNode(index, parent);
    
    if (index === s.length) {
        return node;
    }
    
    // Single digit
    const singleDigit = parseInt(s[index]);
    if (singleDigit !== 0) {
        node.children.push(buildTree(s, index + 1, node));
    }
    
    // Two digits
    const twoDigits = parseInt(s.substring(index, index + 2));
    if (twoDigits >= 10 && twoDigits <= 26) {
        node.children.push(buildTree(s, index + 2, node));
    }
    
    return node;
}

function countDecodings(node) {
    if (!node) {
        return 0;
    }
    
    if (node.children.length === 0) {
        return 1;
    }
    
    let count = 0;
    for (const child of node.children) {
        count += countDecodings(child);
    }
    
    return count;
}

function numDecodings(s) {
    if (!s || s[0] === '0') {
        return 0;
    }
    
    const root = buildTree(s, 0, null);
    return countDecodings(root);
}


// Test cases
// console.log(numDecodings("12"));  // Output: 2
console.log(numDecodings("12345")); // Output: 3
// console.log(numDecodings("06"));  // Output: 0
