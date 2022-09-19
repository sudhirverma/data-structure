// https://leetcode.com/problems/word-search/

// ["A","B","C","E"],
// ["S","F","E","S"],
// ["A","D","E","E"]

// "ABCESEEEFS"

const wordSearch = (m, n, board, word, found, position, visited= {}) => {
    const key = `${m}:${n}`;
    if (found.match) return;
    if (position === word.length) {
        found.match = true;
        return;
    }
    if (board[m]?.[n] === undefined || board[m]?.[n] !== word[position]) return false;
    console.log(key);
    if (visited[key]) return;
    visited[key] = true;
    wordSearch(m, n-1, board, word, found, position + 1, visited);
    wordSearch(m, n+1, board, word, found, position + 1, visited);
    wordSearch(m+1, n, board, word, found, position + 1, visited);
    wordSearch(m-1, n, board, word, found, position + 1, visited);
    visited[key] = false;
}

var exist = function(board, word) {
    let found = {match: false};
    let position = 0
    for (let m=0; m<board.length; m++) {
        for (let n=0; n<board[0].length; n++) {
                if (board[m][n] === word[position]) {
                    wordSearch(m, n, board, word, found, position);
                    if (found.match) return true;
                }
        }
    }
    return found.match;
};
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE";
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
let board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], word = "ABCESEEEFS"
// let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB";
// let board = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]], word ="AAAAAAAAAAAAAAB"
console.log(exist(board, word));