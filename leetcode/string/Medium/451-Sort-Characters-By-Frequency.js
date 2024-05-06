// https://leetcode.com/problems/sort-characters-by-frequency/description/

function frequencySort(s) {
    // Step 1: Create frequency map
    const frequencyMap = new Map();
    for (const char of s) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    // Step 2: Sort characters based on frequencies
    const sortedChars = [...frequencyMap.keys()].sort((a, b) => frequencyMap.get(b) - frequencyMap.get(a));

    // Step 3: Construct sorted string
    let result = '';
    for (const char of sortedChars) {
        const frequency = frequencyMap.get(char);
        result += char.repeat(frequency);
    }

    return result;
}

// Example usage:
console.log(frequencySort("tree"));   // Output: "eert" or "eetr"
console.log(frequencySort("cccaaa")); // Output: "aaaccc" or "cccaaa"
console.log(frequencySort("Aabb"));   // Output: "bbAa" or "bbaA"
