// https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new TreeNode(3, 9, 20);
tree1.left = new TreeNode(9, null, null);
tree1.right = new TreeNode(20, 15, 7);
tree1.right.left = new TreeNode(15, null, null);
tree1.right.right = new TreeNode(7, null, null);

function DFSPostOrder(root) {
    var data = [];
    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node);
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

var buildTree = function(inorder, postorder) {
	return getTree(inorder, postorder);
};


const getTree = (inorder, postorder, left = 0, right = inorder.length - 1) => {
    if (left > right) {
        return null;
    }

    const node = postorder.pop();
    const treeNode = new TreeNode(node);
    const index = inorder.indexOf(node);

    treeNode.right = getTree(inorder, postorder, index + 1, right);
    treeNode.left = getTree(inorder, postorder, left, index - 1);
    return treeNode;
};

console.log(buildTree(DFSPostOrder(tree1), DFSInOrder(tree1)));