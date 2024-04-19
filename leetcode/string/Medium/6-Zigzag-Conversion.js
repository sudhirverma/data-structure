// https://leetcode.com/problems/zigzag-conversion/description/

const convert = (s, numRows) => {
    if (numRows === 1) return s;
    const row = [];
    for (let i = 0; i < Math.min(numRows, s.length); i++) row.push([]);
    let currentRow = 0;
    let goingDown = false;
    for (let char of s) {
        row[currentRow].push(char);
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown
        }
        currentRow += goingDown ? 1 : -1;
    }
    return row.flat().join('');
}


const s = "PAYPALISHIRING", numRows = 3;

console.log(convert(s, numRows))