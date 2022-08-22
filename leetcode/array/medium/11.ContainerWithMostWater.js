// https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    let lengthOfHeight = height.length - 1 ;
    let fromLeft = 0;
    let fromRight = lengthOfHeight;
    let result = 0;
    while (lengthOfHeight > 0) {
        let leftValue = height[fromLeft];
        let rightValue = height[fromRight];
        let minHeight = Math.min(leftValue, rightValue);
        if (leftValue <= rightValue) {
            fromLeft++;
        } else if (rightValue < leftValue) {
            fromRight--;
        }
        let maxWaterAmount = lengthOfHeight * minHeight;
        if (result < maxWaterAmount) result = maxWaterAmount;
        lengthOfHeight--;
    }
    return result;
};

let height = [1,8,6,2,5,4,8,3,7];
let result = maxArea(height);
console.log(result);