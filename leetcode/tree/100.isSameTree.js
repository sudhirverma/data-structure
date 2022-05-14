// https://leetcode.com/problems/same-tree/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree1 = new NodeTree(1,2,3);
tree1.left = new NodeTree(2,null,null);
tree1.right = new NodeTree(3,null,null);
var tree2 = new NodeTree(1,2,3);
tree2.left = new NodeTree(2,null,null);
tree2.right = new NodeTree(3,null,null);

var isSameTree = function(p, q) {
    let queue1 = [p];
    let queue2 = [q];

    while (queue1.length > 0 && queue2.length > 0) {
        const n1 = queue1.pop();
        const n2 = queue2.pop();

        if ((!n1 && n2) || (n1 && !n2)) {
            return false;
        }

        if ((n1 && n2) && n1.val !== n2.val) {
            return false;
        }

        if (n1) {
            queue1.push(n1.left);
            queue1.push(n1.right);
        }

        if (n2) {
            queue2.push(n2.left);
            queue2.push(n2.right);
        }
    }
    if (queue1.length !== queue2.length) {
        return false;
    }
    
    return true;
};

console.log(isSameTree(tree1, tree2));