// https://leetcode.com/problems/count-prefixes-of-a-given-string/

var countPrefixes = function (words, s) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        const regex = `^${words[i]}`;
        if (s.match(regex)) {
            count++;
        }
    }
    return count;
};

let words = ["a", "b", "c", "ab", "bc", "abc"], s = "abc";
let result = countPrefixes(words, s);
console.log(result);