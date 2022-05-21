// https://leetcode.com/problems/binary-tree-inorder-traversal/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new NodeTree(1,null,2);
tree1.right = new NodeTree(2,3,null);
tree1.right.left = new NodeTree(3,null,null);

var inorderTraversal = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    inOrderTraversal(root, result);
    return result;
};

function inOrderTraversal(node, result) {
    if (node && node.left) {
        inOrderTraversal(node.left, result);
    }
    result.push(node.val);
    if (node && node.right) {
        inOrderTraversal(node.right, result);
    }
}

console.log(inorderTraversal(tree1))