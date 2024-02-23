// https://leetcode.com/problems/surrounded-regions/

function checkVisited(m, n, visited, board) {
    const key = `${m}:${n}`;
    console.log(key);
    if (board[m]?.[n] === undefined) return true;
    if (visited[key]) return true;
    else visited[key] = true;
    return false;
}

function dontReplaceO(m, n, visited, board) {
    if (board[m]?.[n] === 'X' || board[m]?.[n] === undefined) {
        return;
    }
    if (visited.dontChangeBorderConnectedZero[`${m}:${n}`]) return true;
    else visited.dontChangeBorderConnectedZero[`${m}:${n}`] = true;
    dontReplaceO(m, n + 1, visited, board);
    dontReplaceO(m, n - 1, visited, board);
    dontReplaceO(m + 1, n, visited, board);
    dontReplaceO(m - 1, n, visited, board);
}

function replaceOToX(m, n, visited, board) {
    if (board[m][n] === 'O') board[m][n] = "X";
    if (board[m][n] === 'X') return;
}

function checkBorderOrNot(m, n, visited, board) {
    if (board[m]?.[n] === 'O' && !visited.dontChangeBorderConnectedZero[`${m}:${n}`]) {
        if (board[m + 1]?.[n] === undefined || board[m - 1]?.[n] === undefined || board[m]?.[n + 1] === undefined || board[m]?.[n - 1] === undefined) {
            return dontReplaceO(m, n, visited, board);
        }
        return replaceOToX(m, n, visited, board);
    }
}

const rightMatrix = (m, n, visited, board) => {
    checkBorderOrNot(m, n, visited, board);
    const visit = checkVisited(m, n, visited, board);
    if (visit) return;
    rightMatrix(m, n + 1, visited, board);
    downMatrix(m + 1, n, visited, board);
}

const downMatrix = (m, n, visited, board) => {
    checkBorderOrNot(m, n, visited, board);
    const visit = checkVisited(m, n, visited, board);
    if (visit) return;
    downMatrix(m + 1, n, visited, board);
    leftMatrix(m, n - 1, visited, board);
}

const leftMatrix = (m, n, visited, board) => {
    checkBorderOrNot(m, n, visited, board);
    const visit = checkVisited(m, n, visited, board);
    if (visit) return;
    leftMatrix(m, n - 1, visited, board);
    upMatrix(m - 1, n, visited, board);
}

const upMatrix = (m, n, visited, board) => {
    checkBorderOrNot(m, n, visited, board);
    const visit = checkVisited(m, n, visited, board);
    if (visit) return;
    upMatrix(m - 1, n, visited, board);
    rightMatrix(m, n + 1, visited, board);
}

var solve = function (board) {
    let visited = {
        dontChangeBorderConnectedZero: {}
    }
    rightMatrix(0, 0, visited, board)
};

// let board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
let board = [["O", "X", "X", "O", "X"], ["X", "O", "O", "X", "O"], ["X", "O", "X", "O", "X"], ["O", "X", "O", "O", "O"], ["X", "X", "O", "X", "O"]];

console.log(solve(board));