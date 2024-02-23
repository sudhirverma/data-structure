// https://leetcode.com/problems/spiral-matrix-ii/


const createSpriral = function (x, y, result, number) {
    if (result?.[x]?.[y] === undefined || result?.[x]?.[y] !== 0) return true;
    if (result?.[x]?.[y] === 0) {
        result[x][y] = number.count++;
        return false;
    }
    return true;
}

const rightMatrix = (m, n, result, number) => {
    const foundDublicate = createSpriral(m, n, result, number);
    if (foundDublicate) return;
    rightMatrix(m, n + 1, result, number);
    downMatrix(m + 1, n, result, number);
}

const downMatrix = (m, n, result, number) => {
    const foundDublicate = createSpriral(m, n, result, number);
    if (foundDublicate) return;
    downMatrix(m + 1, n, result, number);
    leftMatrix(m, n - 1, result, number);
}

const leftMatrix = (m, n, result, number) => {
    const foundDublicate = createSpriral(m, n, result, number);
    if (foundDublicate) return;
    leftMatrix(m, n - 1, result, number);
    upMatrix(m - 1, n, result, number);
}

const upMatrix = (m, n, result, number) => {
    const foundDublicate = createSpriral(m, n, result, number);
    if (foundDublicate) return;
    upMatrix(m - 1, n, result, number);
    rightMatrix(m, n + 1, result, number);
}

var generateMatrix = function (n) {
    const row = n, col = n;
    const result = Array(row).fill([]).map(() => Array(col).fill(0));
    const number = {
        count: 1
    };
    rightMatrix(0, 0, result, number)
    return result;
};

let n = 12;
const result = generateMatrix(n);
console.log(result);