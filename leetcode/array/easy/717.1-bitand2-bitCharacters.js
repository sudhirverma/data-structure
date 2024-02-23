// https://leetcode.com/problems/1-bit-and-2-bit-characters/

var isOneBitCharacter = function (bits) {
    if (bits.length === 1 || (bits.length > 1 && bits[bits.length - 2] === 0)) return true;

    let isOneBit;
    for (let i = 0; i < bits.length; i++) {

        if (bits[i] === 0) {
            isOneBit = true;

        }
        if (bits[i] === 1) {
            isOneBit = false;
            i++;
            if (i >= bits.length - 1) break;
        }
    }
    return isOneBit;
};

let bits = [1, 0, 0];
let result = isOneBitCharacter(bits);

console.log(result);