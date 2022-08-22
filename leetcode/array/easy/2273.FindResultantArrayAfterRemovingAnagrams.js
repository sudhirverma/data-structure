// https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

var removeAnagrams = function(words) {
    let hashWord = {};
    for (let i=0; i<words.length; i++) {
        let sortWord = words[i].split('').sort().join('');
        if (hashWord[sortWord]) {
            words.splice(i,1);
            i--;
            continue;
        }
        hashWord = {};
        hashWord[sortWord] = true;
    }
    return words;
};

let words = ["abba","baba","bbaa","cd","cd"];
let result = removeAnagrams(words);
console.log(result);