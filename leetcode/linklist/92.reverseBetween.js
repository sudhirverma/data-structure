// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// var tree1 = new TreeNode(0, null, null);

// var tree1 = new TreeNode(1, null, 2);
// tree1.right = new TreeNode(2, null, null);

// var tree1 = new TreeNode(1, 2, 5);
// tree1.left = new TreeNode(2, 3, 4);
// tree1.left.left = new TreeNode(3, null, null);
// tree1.left.right = new TreeNode(4, null, null);
// tree1.right = new TreeNode(5, null, 6);
// tree1.right.right = new TreeNode(6, null, null);

var tree1 = new TreeNode(0, 2, 4);
tree1.left = new TreeNode(2, 3, 4);
tree1.left.left = new TreeNode(3, null, null);
tree1.left.right = new TreeNode(4, null, null);
tree1.right = new TreeNode(5, null, 6);
tree1.right.right = new TreeNode(6, null, null);

function flatten(root) {
    let head = null;
    
    const dfs = (node) => {
        if (!node) {
            return;
        }
                
        dfs(node.right);
        dfs(node.left);

        node.left = null;
        node.right = head;
        head = node;
    }

    dfs(root);
};

console.log(flatten(tree1))