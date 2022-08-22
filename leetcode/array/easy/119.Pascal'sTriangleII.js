// https://leetcode.com/problems/pascals-triangle-ii/submissions/

function createPascal(pascal, result) {
    let index1 = 0;
    let index2 = 1;
    let newArr = [];
    for (let i=0; i<=pascal; i++) {
        if (pascal === i || i === 0) {
            newArr[i] = 1;
        } else {
            let resultValueToAdd = result[pascal-1];
            newArr[i] = resultValueToAdd[index1] + resultValueToAdd[index2];
            index1++;
            index2++;
        }
    }
    result.push(newArr);
}


function getRow(rowIndex) {
    let result = [];
    let pascal = 0;
    while (pascal < rowIndex) {
        createPascal(pascal, result);
        pascal++;
    }
    return result[rowIndex];
}

let numRows = 5

let result = getRow(numRows);

console.log(result);