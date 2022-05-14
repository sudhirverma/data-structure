// https://leetcode.com/problems/symmetric-tree/

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

var isSymmetric = function(root) {
    console.log(root);
    const queue1 = [root.left];
    const queue2 = [root.right];

    while (queue1.length > 0 && queue2.length > 0) {
        let node1 = queue1.pop();
        let node2 = queue2.pop();

        if ((!node1 && node2) || (node1 && !node2)) {
            return false;
        }

        if (node1?.val !== node2?.val) {
            return false;
        }
        if (node1) {
            queue1.push(node1.left);
            queue1.push(node1.right);
        }
        if (node2) {
            queue2.push(node2.right);
            queue2.push(node2.left);
        }
    }
    if (queue1.length !== queue2.length) {
        return false;
    }
    return true;
};

console.log(isSymmetric(tree1))