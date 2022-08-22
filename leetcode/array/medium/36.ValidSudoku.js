// https://leetcode.com/problems/valid-sudoku/

const createRowCol = function(rowColSubBox, flatSudoku, i, row, count) {
    if (rowColSubBox.row[row]?.[flatSudoku[i]]) return false;
    if (rowColSubBox.col[count]?.[flatSudoku[i]]) return false;
    if (rowColSubBox.row[row] === undefined && flatSudoku[i] !== '.')  {
        rowColSubBox.row[row] = {};
        rowColSubBox.row[row][flatSudoku[i]] = true;
    } else if (!rowColSubBox.row[row]?.[flatSudoku[i]] && flatSudoku[i] !== '.') {
        rowColSubBox.row[row][flatSudoku[i]] = true;   
    }
    
    if (rowColSubBox.col[count] === undefined && flatSudoku[i] !== '.')  {
        rowColSubBox.col[count] = {};
        rowColSubBox.col[count][flatSudoku[i]] = true;
    } else if (!rowColSubBox.col[count]?.[flatSudoku[i]] && flatSudoku[i] !== '.') {
        rowColSubBox.col[count][flatSudoku[i]] = true;   
    }
}

const createObjectSubBox = function (rowColSubBox, flatSudoku, i, row, count, subBoxPos) {
    if (rowColSubBox.subBox[subBoxPos]?.[flatSudoku[i]]) return false;
    if (rowColSubBox.subBox[subBoxPos] === undefined && flatSudoku[i] !== '.')  {
        rowColSubBox.subBox[subBoxPos] = {};
        rowColSubBox.subBox[subBoxPos][flatSudoku[i]] = true;
    } else if (!rowColSubBox.subBox[subBoxPos]?.[flatSudoku[i]] && flatSudoku[i] !== '.') {
        rowColSubBox.subBox[subBoxPos][flatSudoku[i]] = true;   
    }
}

const conditionToCreateSubBox = function (rowColSubBox, flatSudoku, i, row, count) {
    let subBoxPos = 0;
    if (row < 3 && count < 3) subBoxPos = 0;
    else if (row < 3 && count < 6) subBoxPos = 1;
    else if (row < 3 && count < 9) subBoxPos = 2;
    else if (row < 6 && count < 3) subBoxPos = 3;
    else if (row < 6 && count < 6) subBoxPos = 4;
    else if (row < 6 && count < 9) subBoxPos = 5;
    else if (row < 9 && count < 3) subBoxPos = 6;
    else if (row < 9 && count < 6) subBoxPos = 7;
    else if (row < 9 && count < 9) subBoxPos = 8;
    if (count < 3) {
        return createObjectSubBox(rowColSubBox, flatSudoku, i, row, count, subBoxPos);
    } else if (count < 6) {
        return createObjectSubBox(rowColSubBox, flatSudoku, i, row, count, subBoxPos);
    } else if (count < 9) {
        return createObjectSubBox(rowColSubBox, flatSudoku, i, row, count, subBoxPos);
    }
}

const createSubBox = function (rowColSubBox, flatSudoku, i, row, count) {
    if (row < 3) {
        return conditionToCreateSubBox(rowColSubBox, flatSudoku, i, row, count)
    } else if (row < 6) {
        return conditionToCreateSubBox(rowColSubBox, flatSudoku, i, row, count)
    } else if (row < 9) {
        return conditionToCreateSubBox(rowColSubBox, flatSudoku, i, row, count)
    }
}


var isValidSudoku = function(board) {
    let rowColSubBox = {
        row: {},
        col: {},
        subBox: {}
    }
    let flatSudoku = board.flat();
    let count = 0;
    let row = 0;
    for (let i=0; i<flatSudoku.length; i++) {
        if (count === 9) {
            count = 0;
            row++;
        }
        if (count < 3) {
            const resultRowCol = createRowCol(rowColSubBox, flatSudoku, i, row, count);
            if (resultRowCol === false) return resultRowCol;
            const resultSubBox = createSubBox(rowColSubBox, flatSudoku, i, row, count);
            if (resultSubBox === false) return resultSubBox;
        } else if (count < 6) {
            const resultRowCol = createRowCol(rowColSubBox, flatSudoku, i, row, count);
            if (resultRowCol === false) return resultRowCol;
            const resultSubBox = createSubBox(rowColSubBox, flatSudoku, i, row, count);
            if (resultSubBox === false) return resultSubBox;
        } else if ( count < 9) {
            const resultRowCol = createRowCol(rowColSubBox, flatSudoku, i, row, count);
            if (resultRowCol === false) return resultRowCol;
            const resultSubBox = createSubBox(rowColSubBox, flatSudoku, i, row, count);
            if (resultSubBox === false) return resultSubBox;
        }
        count++
    }
    return true;
};

// let board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]] // true
let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]] // flase
const result = isValidSudoku(board);
console.log(result);