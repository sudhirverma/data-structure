// https://leetcode.com/problems/unique-binary-search-trees/

var numTrees = function(n) {
    if(n < 2) return 1;
    
    let ans = 1;
    for(let i = 2; i <= n; i++){
        ans = ans * (n+i)/i;
    }
    return ans;
};

let n = 3
console.log(numTrees(n));