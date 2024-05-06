// https://leetcode.com/problems/decode-string/description/

function decodeString(s) {
    const stack = [];
    let currStr = ''; // to store the current decoded string
    let num = 0; // to store the current repetition count

    for (let char of s) {
        if (char === '[') {
            stack.push(currStr);
            stack.push(num);
            currStr = '';
            num = 0;
        } else if (char === ']') {
            const prevNum = stack.pop();
            const prevStr = stack.pop();
            currStr = prevStr + currStr.repeat(prevNum);
        } else if (parseInt(char) >= 0) {
            num = num * 10 + parseInt(char); // accumulate the digit for multi-digit numbers
        } else {
            currStr += char; // accumulate characters
        }
    }

    return currStr;
}

// Example usage:
console.log(decodeString("3[a]2[bc]")); // Output: "aaabcbc"
// console.log(decodeString("3[a2[c]]")); // Output: "accaccacc"
// console.log(decodeString("2[abc]3[cd]ef")); // Output: "abcabccdcdcdef"
