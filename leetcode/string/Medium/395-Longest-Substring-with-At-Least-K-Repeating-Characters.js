// https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/description/

function longestSubstring(s, k) {
    if (s.length === 0) return 0;

    const freqMap = new Map();
    for (let char of s) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    let i = 0;
    while (i < s.length && freqMap.get(s[i]) >= k) {
        i++;
    }
    if (i === s.length) return s.length;

    const left = longestSubstring(s.substring(0, i), k);
    while (i < s.length && freqMap.get(s[i]) < k) {
        i++;
    }
    const right = longestSubstring(s.substring(i), k);

    return Math.max(left, right);
}

// Example usage:
console.log(longestSubstring("aaabb", 3)); // Output: 3
console.log(longestSubstring("ababbc", 2)); // Output: 5
