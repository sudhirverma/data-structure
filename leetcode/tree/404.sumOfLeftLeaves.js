//https://leetcode.com/problems/sum-of-left-leaves/

var sumOfLeftLeaves = function(root) {
    let sum = 0;
    function findLeftLeaves(node){
        if(node.left && !node.left.left && !node.left.right){
            sum += node.left.val;
        }
        if(node.left){
            findLeftLeaves(node.left)
        }
        if(node.right){
            findLeftLeaves(node.right)
        }
    }
    if(root){
        findLeftLeaves(root);
    }
    return sum;
};