// https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

const phoneMap = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
};

const backTrack = (index, digits, result, currentValue) => {
    if (index === digits.length) return result.push(currentValue);
    const letters = phoneMap[digits[index]];
    for (let i = 0; i < letters.length; i++) {
        backTrack(index + 1, digits, result, currentValue + letters[i]);
    }
}
const letterCombinations = (digits) => {
    const result = []
    if (digits.length === 0) return result;
    backTrack(0, digits, result, '');
    return result;
}


// Test cases
console.log(letterCombinations("23")); // Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
console.log(letterCombinations("")); // Output: []
console.log(letterCombinations("7")); // Output: ["p", "q", "r", "s"]
