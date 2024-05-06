// https://leetcode.com/problems/remove-k-digits/description/

function removeKdigits(num, k) {
    const stack = [];
    for (const digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    
    // If there are still remaining digits to be removed, pop them
    while (k > 0) {
        stack.pop();
        k--;
    }
    
    // Construct the smallest number from the remaining digits in the stack
    let smallestNum = stack.join('').replace(/^0+/, '');
    
    // If the number is empty, return '0'
    if (smallestNum === '') {
        return '0';
    }
    
    return smallestNum;
}

// Example usage:
console.log(removeKdigits("1432219", 3)); // Output: "1219"
console.log(removeKdigits("10200", 1));   // Output: "200"
console.log(removeKdigits("10", 2));      // Output: "0"
