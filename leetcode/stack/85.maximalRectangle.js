// https://leetcode.com/problems/maximal-rectangle/

var maximalRectangle = function(matrix) {
    if(matrix.length === 0) return 0;

    let width = new Array(matrix.length).fill(0);
    let max = 0;

    for(let i = 0; i < matrix[0].length; i++) {
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[j][i] === '1') {
                width[j]++;
            } else {
                width[j] = 0;
            }
        }
    
        for(let i = 0; i < matrix.length; i++) {
            let height1 = i - 1;
            while(height1 >= 0 && width[height1] >= width[i]) {
                height1--;
            }
    
            let height2 = i + 1;
            while(height2 < matrix.length && width[height2] >= width[i]) {
                height2++;
            }
    
            max = Math.max(max, width[i] * (height2 - height1 - 1));
        }
    }
    return max;
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));