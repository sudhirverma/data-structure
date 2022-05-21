// https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    let res = 0;
    let left = 0;
    let right = height.length-1;
    let rightMax = 0;
    let leftMax = 0;
    while(left < right ) {
        if(height[left] <= height[right] ) {
            
            if(height[left]>leftMax) {
                leftMax = height[left];
            } else {
                res = res + leftMax - height[left];
                left++
            }
            
        } else {
            if(height[right] > rightMax) {
                rightMax = height[right];
            } else {
                res = res + rightMax - height[right]
                right--;
            }
        }
    }
    return res;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));