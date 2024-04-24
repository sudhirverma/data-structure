// https://leetcode.com/problems/repeated-dna-sequences/description/

var findRepeatedDnaSequences = function(s) {
    if (s.length <= 10) {
        return [];
    }

    const repeatedSequences = new Set();
    const seenSequences = new Set();

    for (let i = 0; i <= s.length - 10; i++) {
        const sequence = s.substring(i, i + 10);
        if (seenSequences.has(sequence)) {
            repeatedSequences.add(sequence);
        } else {
            seenSequences.add(sequence);
        }
    }

    return Array.from(repeatedSequences);
};

// Test cases
const s1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const s2 = "AAAAAAAAAAAAA";
console.log(findRepeatedDnaSequences(s1));  // Output: ["AAAAACCCCC", "CCCCCAAAAA"]
console.log(findRepeatedDnaSequences(s2));  // Output: ["AAAAAAAAAA"]
