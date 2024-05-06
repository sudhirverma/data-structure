// https://leetcode.com/problems/reconstruct-original-digits-from-english/

function originalDigits(s) {
    const count = new Array(10).fill(0); // Array to store counts for each digit
    const charCounts = {}; // Object to store counts for each character
    
    // Count occurrences of each character in the string
    for (const char of s) {
        charCounts[char] = (charCounts[char] || 0) + 1;
    }
    
    // Count occurrences of each digit based on unique character associations
    count[0] = charCounts['z'] || 0;
    count[2] = charCounts['w'] || 0;
    count[4] = charCounts['u'] || 0;
    count[6] = charCounts['x'] || 0;
    count[8] = charCounts['g'] || 0;
    count[3] = (charCounts['h'] || 0) - count[8];
    count[5] = (charCounts['f'] || 0) - count[4];
    count[7] = (charCounts['s'] || 0) - count[6];
    count[9] = (charCounts['i'] || 0) - count[5] - count[6] - count[8];
    count[1] = (charCounts['n'] || 0) - count[7] - 2 * count[9];
    
    // Construct the sorted digits string based on counts
    let result = '';
    for (let i = 0; i <= 9; i++) {
        result += i.toString().repeat(count[i]);
    }
    
    return result;
}
// 0: zero 1: one 2: Two 3: three 4: four 5: five 6: six 7: seven 8: eight 9: nine 
// Example usage:
console.log(originalDigits("owoztneoer")); // Output: "012"
console.log(originalDigits("fviefuro"));   // Output: "45"
