// https://leetcode.com/problems/edit-distance/description/

function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Initialize dp array
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Fill in the base cases
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i; // Number of operations to convert word1[0...i-1] to an empty string
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j; // Number of operations to convert an empty string to word2[0...j-1]
    }

    // Fill in the dp array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i][j - 1] + 1, // Insertion
                    dp[i - 1][j] + 1, // Deletion
                    dp[i - 1][j - 1] + 1 // Replacement
                );
            }
        }
    }

    return dp[m][n];
}

// 0: [0, 1, 2, 3]
// 1: [1, 1, 2, 3]
// 2: [2, 2, 1, 2]
// 3: [3, 2, 2, 2]
// 4: [4, 3, 3, 2]
// 5: [5, 4, 4, 3]

// Test cases
console.log(minDistance("horse", "ros")); // Output: 3
// console.log(minDistance("intention", "execution")); // Output: 5
