// https://leetcode.com/problems/count-and-say/description/

const countAndSay = (n) => {
    if (n === 1) return "1";

    let result = "1";
    for (let i = 2; i <= n; i++) {
        let current = "";
        let count = 1;

        for (let j = 1; j < result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++;
            } else {
                current += count + result[j - 1];
                count = 1;
            }
        }
        current += count + result[result.length - 1];
        result = current;
    }

    return result;
};

// Example usage
// console.log(countAndSay(1));  // Output: "1"
console.log(countAndSay(4));  // Output: "1211"
// console.log(countAndSay(6));  // Output: "312211"

// 1  2  3  4
// 1  11 21 1211

