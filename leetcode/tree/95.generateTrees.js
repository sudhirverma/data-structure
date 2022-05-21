// https://leetcode.com/problems/unique-binary-search-trees-ii/

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var generateTrees = function(n) {
    if (n === 0) return [];
    
    const cache = Array(n + 1).fill().map(() => {
        return Array(n + 1).fill()
    });
    function dfs(start, end) {
        if (start > end) return [null];
        if (cache[start][end] === undefined) {
            cache[start][end] = []
            for (let i = start; i <= end; i++) {
                const left = dfs(start, i - 1);
                const right = dfs(i + 1, end);
                for (const l of left) {
                    for (const r of right) {
                        cache[start][end].push(new TreeNode(i, l, r))
                    }
                }
            }
        }
        return cache[start][end]
    }
    let result = dfs(1, n);
    return result
};

console.log(generateTrees(2))