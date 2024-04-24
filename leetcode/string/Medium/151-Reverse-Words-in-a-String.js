// https://leetcode.com/problems/reverse-words-in-a-string/description/

// Helper function to reverse a portion of an array
function reverse(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

var reverseWords = function(s) {
    // Convert string to array of characters
    const arr = s.trim().split('');
    // Reverse the entire string
    reverse(arr, 0, arr.length - 1);
    
    // Reverse each word within the string
    let start = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            reverse(arr, start, i - 1);
            start = i + 1;
            while (arr[start] === ' ') {
                arr.splice(start, 1);
            }
        }
    }
    // Reverse the last word
    reverse(arr, start, arr.length - 1);
    
    // Convert the array back to string
    return arr.join('');
};


// Example usage:
// console.log(reverseWords("the sky is blue"));        // Output: "blue is sky the"
// console.log(reverseWords("  hello world  "));        // Output: "world hello"
console.log(reverseWords("a good   example"));       // Output: "example good a"
