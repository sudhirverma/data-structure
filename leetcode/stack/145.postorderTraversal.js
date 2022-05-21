// https://leetcode.com/problems/binary-tree-postorder-traversal/


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
    traversal(root.left, stack);
    traversal(root.right, stack);
    stack.push(root.val);
    
}

var postorderTraversal = function(root) {
    let stack = []
    traversal(root, stack)
    return stack;
};