// https://leetcode.com/problems/string-compression/description/

function compress(chars) {
    let write = 0;
    let read = 0;

    while (read < chars.length) {
        let char = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }

        chars[write++] = char;

        if (count > 1) {
            for (let digit of count.toString()) {
                chars[write++] = digit;
            }
        }
    }

    return write;
}

// Example usage:
const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1));  // Output: 6, chars1 is modified to ["a", "2", "b", "2", "c", "3"]

const chars2 = ["a"];
console.log(compress(chars2));  // Output: 1, chars2 is modified to ["a"]

const chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
console.log(compress(chars3));  // Output: 4, chars3 is modified to ["a", "b", "1", "2"]
