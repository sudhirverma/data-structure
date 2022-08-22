// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

var nextGreatestLetter = function(letters, target) {
    if (!(letters[letters.length-1] > target)) {
        return letters[0];
    }
    for (let i=0; i<letters.length; i++) {
        if (letters[i] > target) {
            return letters[i];
        }
    }
};

// let letters = ["c","f","j"], target = "a";
let letters = ["c","f","j"], target = 'j';
let result = nextGreatestLetter(letters, target);