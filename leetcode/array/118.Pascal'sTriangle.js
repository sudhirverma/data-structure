// https://leetcode.com/problems/pascals-triangle/


function createPascalTriangle(pascal, result) {
    let newArr = [];
    let index1 = 0;
    let index2 = 1;
    for (let i=0; i<=pascal; i++) {
        if (i === pascal || i === 0) {
            newArr[i] = 1
        } else {
            let resultIndexToAdd = result[pascal-1];
            newArr[i] = resultIndexToAdd[index1] + resultIndexToAdd[index2];
            index1++;
            index2++;
        }
    }
    result.push(newArr);
}

var generate = function(numRows) {
    let result = [];
    let pascal = 0;
    while (pascal < numRows) {
        createPascalTriangle(pascal, result);
        pascal++;
    }
    return result;
}

let numRows = 5

let result = generate(numRows);

console.log(result);