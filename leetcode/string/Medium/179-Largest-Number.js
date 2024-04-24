// https://leetcode.com/problems/largest-number/description/

// Custom comparison function to determine the order of concatenation
function compare(x, y) {
    return (y + x) - (x + y);
}

function largestNumber(nums) {
    // Convert numbers to strings
    let numsStr = nums.map(num => num.toString());

    // Sort the numbers using the custom comparison function
    numsStr.sort((x, y) => compare(x, y));

    // If the largest number is 0, return "0"
    if (numsStr[0] === "0") {
        return "0";
    }

    // Concatenate the sorted numbers and return
    return numsStr.join("");
}

// Test cases
// const nums1 = [10, 2];
const nums2 = [3, 30, 34, 5, 9];
// console.log(largestNumber(nums1));  // Output: "210"
console.log(largestNumber(nums2));  // Output: "9534330"
