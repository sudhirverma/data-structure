// https://leetcode.com/problems/shortest-completing-word/

let regex = /[\ 0-9]/g;
var shortestCompletingWord = function (licensePlate, words) {
    const lp = licensePlate.toLowerCase().replace(regex, '');
    let sortedWords = words.sort((a, b) => a.length - b.length);
    for (let word of sortedWords) {
        let temp = lp;
        for (let char of word) {
            temp = temp.replace(char, '');
        }
        if (temp === '') return word;
    }
    return '';
};

let licensePlate = "1s3 PSt", words = ["step", "Steps", "stripe", "stepple"];

const result = shortestCompletingWord(licensePlate, words);
console.log(result);