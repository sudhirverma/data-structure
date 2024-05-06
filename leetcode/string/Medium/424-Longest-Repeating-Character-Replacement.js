// https://leetcode.com/problems/longest-repeating-character-replacement/description/

function longestSubstringSameLetters(s, k) {
    if (!s.length) return 0;

    let maxLength = 0;
    let maxCount = 0;
    const charCount = {};
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        charCount[s[right]] = (charCount[s[right]] || 0) + 1;
        maxCount = Math.max(maxCount, charCount[s[right]]);

        while (right - left + 1 - maxCount > k) {
            charCount[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
// console.log(longestSubstringSameLetters("ABAB", 2)); // Output: 4
console.log(longestSubstringSameLetters("AABABBBA", 1)); // Output: 5
