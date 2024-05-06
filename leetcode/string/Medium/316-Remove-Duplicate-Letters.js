// https://leetcode.com/problems/remove-duplicate-letters/description/

function removeDuplicateLetters(s) {
    const lastOccurrence = {};
    const stack = [];
    const seen = new Set();

    // Populate last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        lastOccurrence[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!seen.has(char)) {
            while (
                stack.length > 0 &&
                char < stack[stack.length - 1] &&
                i < lastOccurrence[stack[stack.length - 1]]
            ) {
                seen.delete(stack.pop());
            }
            seen.add(char);
            stack.push(char);
        }
    }

    return stack.join('');
}

// Example usage:
// const s1 = "bcabc";
// console.log(removeDuplicateLetters(s1)); // Output: "abc"

const s2 = "cbacdcbc";
console.log(removeDuplicateLetters(s2)); // Output: "acdb"
