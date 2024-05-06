// https://leetcode.com/problems/bulls-and-cows/description/

var getHint = function (secret, guess) {
    const secretFreq = new Array(10).fill(0);
    const guessFreq = new Array(10).fill(0);
    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < secret.length; i++) {
        const s = parseInt(secret[i]);
        const g = parseInt(guess[i]);
        if (s === g) {
            bulls++;
        } else {
            secretFreq[s]++;
            guessFreq[g]++;
        }
    }

    for (let i = 0; i < 10; i++) {
        cows += Math.min(secretFreq[i], guessFreq[i]);
    }

    return `${bulls}A${cows}B`;
};

// Test cases
console.log(getHint("1807", "7810")); // Output: "1A3B"
console.log(getHint("1123", "0111")); // Output: "1A1B"
