// https://leetcode.com/problems/binary-tree-inorder-traversal/

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