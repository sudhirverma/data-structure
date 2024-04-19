// https://leetcode.com/problems/longest-palindromic-substring/description/

var longestPalindrome = function(s) {
    let result = "";
    let maxPal = 0;
    for (let i=0; i<s.length; i++) {
        // odd length Palindromic Substring
        let left = i; let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > maxPal) {
                result = s.slice(left, right+1);
                maxPal = right - left + 1
            }
            left -= 1;
            right += 1;
        }
        // even length Palindromic Substring
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (maxPal < right - left + 1) {
                result = s.slice(left, right+1);
                maxPal = right - left + 1
            }
            left -= 1;
            right += 1;
        }
    }
    return result;
};

const s = "babad";

console.log(longestPalindrome(s));