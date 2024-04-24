// https://leetcode.com/problems/interleaving-string/description/

// function isInterleave(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) {
//         return false; // Lengths do not match
//     }
    
//     const dp = Array(s1.length + 1).fill(false).map(() => Array(s2.length + 1).fill(false));
//     dp[0][0] = true; // Base case
    
//     // Initialize first row (s2 is empty)
//     for (let i = 1; i <= s1.length; i++) {
//         dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
//     }
    
//     // Initialize first column (s1 is empty)
//     for (let j = 1; j <= s2.length; j++) {
//         dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
//     }
    
//     // Fill the dp table
//     for (let i = 1; i <= s1.length; i++) {
//         for (let j = 1; j <= s2.length; j++) {
//             dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || 
//                        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
//         }
//     }
    
//     return dp[s1.length][s2.length];
// }

// function isInterleave(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length) {
//         return false;
//     }

//     const dp = new Array(s1.length + 1).fill(false).map(() => new Array(s2.length + 1).fill(false));
//     dp[s1.length][s2.length] = true;

//     for (let i = s1.length; i >= 0; i--) {
//         for (let j = s2.length; j >= 0; j--) {
//             if (i < s1.length && s1[i] === s3[i + j] && dp[i + 1][j]) {
//                 dp[i][j] = true;
//             }
//             if (j < s2.length && s2[j] === s3[i + j] && dp[i][j + 1]) {
//                 dp[i][j] = true;
//             }
//         }
//     }

//     return dp[0][0];
// }


function isInterleave(s1, s2, s3) {
    const dp = new Map();

    if (s1.length + s2.length !== s3.length) return false;

    function dfs(i, j) {
        if (i === s1.length && j === s2.length) {
            return true;
        }

        if (dp.has(`${i},${j}`)) {
            return dp.get(`${i},${j}`);
        }

        let result = false;
        if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) {
            result = true;
        }
        if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) {
            result = true;
        }

        dp.set(`${i},${j}`, result);
        return result;
    }

    return dfs(0, 0);
}

// Test cases
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // Output: true
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // Output: false