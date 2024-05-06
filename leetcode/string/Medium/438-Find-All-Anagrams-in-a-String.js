// https://leetcode.com/problems/find-all-anagrams-in-a-string/description/

function findAnagrams(s, p) {
    const result = [];
    const targetMap = new Map();
    const windowMap = new Map();

    // Initialize targetMap with frequency of characters in p
    for (const char of p) {
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let matched = 0;

    while (right < s.length) {
        const charRight = s[right];
        if (targetMap.has(charRight)) {
            windowMap.set(charRight, (windowMap.get(charRight) || 0) + 1);
            if (windowMap.get(charRight) === targetMap.get(charRight)) {
                matched++;
            }
        }
        right++;

        while (matched === targetMap.size) {
            if (right - left === p.length) {
                result.push(left);
            }
            const charLeft = s[left];
            if (targetMap.has(charLeft)) {
                windowMap.set(charLeft, windowMap.get(charLeft) - 1);
                if (windowMap.get(charLeft) < targetMap.get(charLeft)) {
                    matched--;
                }
            }
            left++;
        }
    }

    return result;
}

// Example usage:
const s1 = "cbaebabacd";
const p1 = "abc";
console.log(findAnagrams(s1, p1));  // Output: [0, 6]

const s2 = "abab";
const p2 = "ab";
console.log(findAnagrams(s2, p2));  // Output: [0, 1, 2]
