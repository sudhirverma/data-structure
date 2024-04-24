// https://leetcode.com/problems/palindrome-partitioning/description/

var partition = function(s) {
    const isPalindrome = (string) => {
        return string === string.split('').reverse().join('');
    };
    
    const backtrack = (start, path) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }
        for (let end = start + 1; end <= s.length; end++) {
            const substring = s.slice(start, end);
            if (isPalindrome(substring)) {
                path.push(substring);
                backtrack(end, path);
                path.pop();
            }
        }
    };
    
    let result = [];
    backtrack(0, []);
    return result;
};

// var partition = function(s) {
//     const isPalindrome = (start, end, dp) => {
//         return dp[start][end];
//     };
    
//     const backtrack = (start, path, dp, result) => {
//         if (start === s.length) {
//             result.push([...path]);
//             return;
//         }
//         for (let end = start + 1; end <= s.length; end++) {
//             if (isPalindrome(start, end - 1, dp)) {
//                 const substring = s.slice(start, end);
//                 path.push(substring);
//                 backtrack(end, path, dp, result);
//                 path.pop();
//             }
//         }
//     };
    
//     const dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));
    
//     // Preprocess dp table to store whether each substring is a palindrome or not
//     for (let len = 1; len <= s.length; len++) {
//         for (let start = 0; start + len <= s.length; start++) {
//             const end = start + len - 1;
//             if (s[start] === s[end] && (len <= 2 || dp[start + 1][end - 1])) {
//                 dp[start][end] = true;
//             }
//         }
//     }
    
//     let result = [];
//     backtrack(0, [], dp, result);
//     return result;
// };


// Example usage:
console.log(partition("aab"));  // Output: [["a","a","b"],["aa","b"]]
console.log(partition("a"));    // Output: [["a"]]
