// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {};
    let start = 0;
    let maxLen = 0;
    for (let i=0; i<s.length; i++) {
        const current = map[s[i]];
        if (current!==undefined && start <= current) {
            start = current + 1;
        } else {
            maxLen = Math.max(maxLen, i - start + 1);
        }
        map[s[i]] = i;
    }
    return maxLen;
};
let s = "abcabcbdb";

console.log(lengthOfLongestSubstring(s))