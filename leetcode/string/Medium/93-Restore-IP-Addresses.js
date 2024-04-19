// https://leetcode.com/problems/restore-ip-addresses/description/


// Helper function to backtrack and generate IP addresses
function backtrack(startIndex, parts, result, s) {
    // If we have found 4 parts and used all characters in s, add the IP address to the result
    if (parts.length === 4 && startIndex === s.length) {
        result.push(parts.join('.'));
        return;
    }

    // If we have found 4 parts but there are characters remaining in s, stop exploring this path
    if (parts.length === 4 || startIndex === s.length) {
        return;
    }

    // Explore all possible segments starting from startIndex
    for (let i = startIndex; i < s.length; i++) {
        const segment = s.substring(startIndex, i + 1);

        // Skip segments with leading zeros (except for '0' itself)
        if (segment.length > 1 && segment[0] === '0') {
            continue;
        }

        const num = parseInt(segment);
        if (num >= 0 && num <= 255) {
            // Choose
            parts.push(segment);

            // Explore
            backtrack(i + 1, parts, result, s);

            // Unchoose
            parts.pop();
        }
    }
}

function restoreIpAddresses(s) {
    const result = [];
    backtrack(0, [], result, s);
    return result;
}


// Test cases
console.log(restoreIpAddresses("25525511135")); // Output: ["255.255.11.135","255.255.111.35"]
// console.log(restoreIpAddresses("0000"));        // Output: ["0.0.0.0"]
// console.log(restoreIpAddresses("101023"));      // Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
