// https://leetcode.com/problems/longest-absolute-file-path/description/

function lengthLongestPath(input) {
    let maxLen = 0;
    const stack = [0]; // to store the length of each directory level

    input.split('\n').forEach(line => {
        const depth = line.split('\t').length - 1; // get the depth of the current directory
        const currLen = stack[depth] + line.length - depth; // calculate the length of the current file/directory

        if (line.includes('.')) { // check if the line represents a file
            maxLen = Math.max(maxLen, currLen);
        } else { // update stack for subdirectories
            if (depth + 1 < stack.length) {
                stack[depth + 1] = currLen + 1; // plus one for the '/'
            } else {
                stack.push(currLen + 1); // plus one for the '/'
            }
        }
    });

    return maxLen;
}

// Example usage:
const input1 = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext";
console.log(lengthLongestPath(input1)); // Output: 20

const input2 = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext";
console.log(lengthLongestPath(input2)); // Output: 32

const input3 = "a";
console.log(lengthLongestPath(input3)); // Output: 0
