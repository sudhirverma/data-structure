// https://leetcode.com/problems/reshape-the-matrix/

var matrixReshape = function(mat, r, c) {
    if (mat.length * mat[0].length !== r*c) return mat;
    const flat = mat.flat();
    let result = Array(r).fill([]).map(() => {
        return Array(c).fill().map(()=>flat.shift());
    });
    return result;
};

let mat = [[1,2],[3,4]], r = 1, c = 4;

let result = matrixReshape(mat, r, c);

console.log(result);