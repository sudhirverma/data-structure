// https://leetcode.com/problems/maximum-product-of-word-lengths/description/

var maxProduct = function(words) {
    // Function to check if two words share any common letters
    const noCommonLetters = (word1, word2) => {
        return !word1.split('').some(letter => word2.includes(letter));
    }

    let maxProduct = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const common = noCommonLetters(words[i], words[j])
            if (common) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }

    return maxProduct;
};


// Test cases
const words1 = ["abcw","baz","foo","bar","xtfn","abcdef"];
const words2 = ["a","ab","abc","d","cd","bcd","abcd"];
const words3 = ["a","aa","aaa","aaaa"];

console.log(maxProduct(words1)); // Output: 16
console.log(maxProduct(words2)); // Output: 4
console.log(maxProduct(words3)); // Output: 0
