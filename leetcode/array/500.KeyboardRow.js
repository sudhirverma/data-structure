// https://leetcode.com/problems/keyboard-row/

let firstRowRegex = /[qwertyuiop]/gm;
let secondRowRegex = /[asdfghjkl]/gm;
let thirdRowRegex = /[zxcvbnm]/gm;

var findWords = function(words) {
    let result = [];
    
    for (let i=0; i<words.length; i++) {
        if (words[i].toLowerCase().match(firstRowRegex)?.length === words[i].length) {
            result.push(words[i]);
            continue;
        }
        if (words[i].toLowerCase().match(secondRowRegex)?.length === words[i].length) {
            result.push(words[i]);
            continue;
        }
        if (words[i].toLowerCase().match(thirdRowRegex)?.length === words[i].length) {
            result.push(words[i]);
            continue;
        }
    }
    return result;
    
};