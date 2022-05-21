// https://leetcode.com/problems/binary-search-tree-iterator/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new NodeTree(1, 2, 3);
tree1.left = new NodeTree(2, 3, 4);
tree1.right = new NodeTree(2, 4, 3);
tree1.left.left = new NodeTree(3, null, null);
tree1.left.right = new NodeTree(4, null, null);
tree1.right.left = new NodeTree(4, null, null);
tree1.right.right = new NodeTree(3, null, null);

var BSTIterator = function(root) {
    this.nodes = [];
    this.traverse(root);
};

BSTIterator.prototype.next = function() {
    return this.nodes.shift();
};

BSTIterator.prototype.hasNext = function() {
    return this.nodes.length > 0;
};

BSTIterator.prototype.traverse = function(node) {
    if (!node) {
        return;
    }

    this.traverse(node.left);
    this.nodes.push(node.val);
    this.traverse(node.right);
};

let bst = new BSTIterator(tree1)

console.log(bst)