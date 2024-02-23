// https://leetcode.com/problems/can-place-flowers/


var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    let countEmpty = 0;
    let countNotEmpty = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if ((countEmpty === 2 && countNotEmpty === 0) || countEmpty === 3) {
            n--;
            countEmpty = 0;
            countNotEmpty = 0;
            if (n === 0) return true;
        }
        if (flowerbed[i] === 0) {
            countEmpty += 1;
            continue;
        }
        countEmpty = 0;
        countNotEmpty++;
    }
    if (countEmpty >= 2 || (countEmpty === 1 && countNotEmpty === 0)) n--;
    if (n === 0) return true;
    return false;
};

let flowerbed = [1, 0, 0, 0, 1], n = 1
let result = canPlaceFlowers(flowerbed, n);
console.log(result);