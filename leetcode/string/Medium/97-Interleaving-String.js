// https://leetcode.com/problems/interleaving-string/description/

function isInterleave(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false; // Lengths do not match
    }
    
    const dp = Array(s1.length + 1).fill(false).map(() => Array(s2.length + 1).fill(false));
    dp[0][0] = true; // Base case
    
    // Initialize first row (s2 is empty)
    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }
    
    // Initialize first column (s1 is empty)
    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }
    
    // Fill the dp table
    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) || 
                       (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }
    
    return dp[s1.length][s2.length];
}

// 0: [true, false, false, false, false, false]
// 1: [false, false, false, false, false, false]
// 2: [false, false, false, false, false, false]
// 3: [false, false, false, false, false, false]
// 4: [false, false, false, false, false, false]
// 5: [false, false, false, false, false, false]

// Test cases
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // Output: true
// console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // Output: false
