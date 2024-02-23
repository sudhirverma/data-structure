function charCount(str) {
    let obj = {};
    //     for (let i = 0; i < str.length; i++) {
    for (let char of str) {
        char = char.toLowerCase();
        //         if (/[a-z0-9]/.test(char)) {
        if (isAlphaNumeric(char)) {
            //             if (obj[char] > 0) {
            //                 obj[char]++;
            //             } else {
            //                 obj[char] = 1;
            //             }
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(str) {
    let code;
    for (let i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(0);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {
            return false;
        }
    }
    return true;
}

console.log(charCount('Sudhir verma'))