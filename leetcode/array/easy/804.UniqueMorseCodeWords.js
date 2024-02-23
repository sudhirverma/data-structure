// https://leetcode.com/problems/unique-morse-code-words/

var uniqueMorseRepresentations = function (words) {
    let morseWord = {
        'a': ".-",
        'b': "-...",
        'c': "-.-.",
        'd': "-..",
        'e': ".",
        'f': "..-.",
        'g': "--.",
        'h': "....",
        'i': "..",
        'j': ".---",
        'k': "-.-",
        'l': ".-..",
        'm': "--",
        'n': "-.",
        'o': "---",
        'p': ".--.",
        'q': "--.-",
        'r': ".-.",
        's': "...",
        't': "-",
        'u': "..-",
        'v': "...-",
        'w': ".--",
        'x': "-..-",
        'y': "-.--",
        'z': "--.."
    }
    let uniqueMorse = {};
    for (let i = 0; i < words.length; i++) {
        let string = '';
        for (let j = 0; j < words[i].length; j++) {
            string = string.concat(morseWord[words[i][j]]);
        }
        if (!uniqueMorse[string]) {
            uniqueMorse[string] = true;
        }
    }
    return Object.keys(uniqueMorse).length;
};

let words = ["gin", "zen", "gig", "msg"];

let result = uniqueMorseRepresentations(words);
console.log(result);