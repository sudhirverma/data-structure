// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


// InOrder
var tree1 = new TreeNode(0, -3, 9);
tree1.left = new TreeNode(-3, null, null);
tree1.right = new TreeNode(9, null, null);

let nums = [-3,9,0]


// tree1.left = new TreeNode(-3, -10, null);
// tree1.left.left = new TreeNode(-10, null, null);
// tree1.right = new TreeNode(9, 5, null);
// tree1.right.left = new TreeNode(5, null, null);

const helper = (nums, start, end) => {
    if(end < start)
        return null;
    
    let mid = start + Math.floor((end - start) / 2);
    
    let left = helper(nums, start, mid - 1);
    
    let treeNode = new TreeNode(nums[mid]);
    treeNode.left = left;
    
    let right = helper(nums, mid+1, end);
    treeNode.right = right;
    
    return treeNode;
}


// PreOrder
// const helper = (nums, start, end) => {
//     if(end < start) 
//         return null;
    
//     let mid = start + Math.floor((end - start) / 2);
    
//     let node = new TreeNode(nums[mid]);
//     node.left = helper(nums, start, mid - 1);
//     node.right = helper(nums, mid+1, end);
    
//     return node;
// }

var sortedArrayToBST = function(nums) {
    
    return helper(nums, 0, nums.length - 1);
}

// let nums = [tree1.left.left, tree1.left, tree1, tree1.right.left, tree1.right]

console.log(sortedArrayToBST(nums))