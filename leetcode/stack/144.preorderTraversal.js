// https://leetcode.com/problems/binary-tree-preorder-traversal/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new NodeTree(1, null, 2);
tree1.right = new NodeTree(2, 3, null);
tree1.right.left = new NodeTree(3, null, null);

function traversal(root, stack) {
    if (!root) {
        return null
    }
    stack.push(root.val);
    traversal(root.left, stack);
    traversal(root.right, stack);
    
}

var preorderTraversal = function(root) {
    let stack = []
    traversal(root, stack)
    return stack;
};