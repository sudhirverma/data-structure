// https://leetcode.com/problems/range-addition-ii/

const maxCount = (m, n, ops) => {
    let minx = m;
    let miny = n;

    for (const op of ops) {
      op[0] < minx && (minx = op[0]);
      op[1] < miny && (miny = op[1]);
    }

    return minx * miny;
};

// let m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]];
let m = 26, n =17, ops = [[20,10],[26,11],[2,11],[4,16],[2,3],[23,13],[7,15],[11,11],[25,13],[11,13],[13,11],[13,16],[26,17]];

let result = maxCount(m,n,ops);

console.log(result);