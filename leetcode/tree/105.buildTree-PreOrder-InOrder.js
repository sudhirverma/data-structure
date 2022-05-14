// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new NodeTree(3, 9, 20);
tree1.left = new NodeTree(9, null, null);
tree1.right = new NodeTree(20, 15, 7);
tree1.right.left = new NodeTree(15, null, null);
tree1.right.right = new NodeTree(7, null, null);

function DFSPreOrder(root) {
    var data = [];
    function traverse(node) {
        data.push(node);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return data;
}

function DFSInOrder(root) {
    var data = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node);
        if (node.right) traverse(node.right);
    }
    traverse(root);
    return data;
}

var buildTree = function(preorder, inorder) {
	return getTree(preorder, inorder);
};

const getTree = (preorder, inorder, left = 0, right = preorder.length - 1) => {
    if (left > right) {
        return null;
    }

    const node = preorder.shift();
    const treeNode = new NodeTree(node);
    const index = inorder.indexOf(node);

    treeNode.left = getTree(preorder, inorder, left, index - 1);
    treeNode.right = getTree(preorder, inorder, index + 1, right);
    return treeNode;
};

console.log(buildTree(DFSPreOrder(tree1), DFSInOrder(tree1)));