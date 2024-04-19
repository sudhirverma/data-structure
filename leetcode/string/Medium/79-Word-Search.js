

const wordSearch = (m, n, board, word, found, position, visited= {}) => {
    const key = `${m}:${n}`;
    if (found.match) return;
    if (position === word.length) {
        found.match = true;
        return;
    }
    if (visited[key]) return;
    if (board[m]?.[n] === undefined || board[m]?.[n] !== word[position]) return false;
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

// Test cases
const board1 = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];
console.log(exist(board1, "ABCCED"));  // Output: true
// console.log(exist(board1, "SEE"));     // Output: true
// console.log(exist(board1, "ABCB"));    // Output: false