// https://leetcode.com/problems/flood-fill/

function replaceColor(row, col, image, imageColor, color) {
    if (image[row]?.[col] === imageColor) {
        image[row][col] = color;
    } else {
        return;
    }
    replaceColor(row - 1, col, image, imageColor, color);
    replaceColor(row + 1, col, image, imageColor, color);
    replaceColor(row, col - 1, image, imageColor, color);
    replaceColor(row, col + 1, image, imageColor, color);
}

var floodFill = function (image, sr, sc, color) {
    let imageColor = image[sr]?.[sc];
    if (imageColor === color) return image;
    for (let row = sr; row < image.length; row++) {
        for (let col = sc; col < image[row].length; col++) {
            replaceColor(row, col, image, imageColor, color);
            return image;
        }
    }
};

// let image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
// let image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0;
let image = [[0, 0, 0], [1, 0, 1]], sr = 1, sc = 0, color = 2;
let result = floodFill(image, sr, sc, color);
console.log(result);