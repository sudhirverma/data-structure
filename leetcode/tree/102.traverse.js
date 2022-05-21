// https://leetcode.com/problems/binary-tree-level-order-traversal/

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

// var tree1 = new NodeTree(3, 9, 20);
// tree1.left = new NodeTree(9, 8, 6);
// tree1.right = new NodeTree(20, 15, 7);
// tree1.right.left = new NodeTree(15, 5, 10);
// tree1.right.right = new NodeTree(7, null, null);
// tree1.right.left.left = new NodeTree(5, null, null);
// tree1.right.left.right = new NodeTree(10, null, null);
// tree1.left.left = new NodeTree(8, 1, 2);
// tree1.left.right = new NodeTree(6, 3, 4);
// tree1.left.right.left = new NodeTree(3, null, null);
// tree1.left.right.right = new NodeTree(4, null, null);
// tree1.left.left.left = new NodeTree(1, null, null);
// tree1.left.left.right = new NodeTree(2, null, null);

const traverse = (root, depth, output) => {
    const level = output[depth]; // get array of current level

    if (!level) {
        output[depth] = [root.val]; // if array of current level DNE, set one and add current val
    } else {
        level.push(root.val); // if array exist, add current val
    }

    // traverse next level
    if (root.left) {
        traverse(root.left, depth + 1, output);
    }
    if (root.right) {
        traverse(root.right, depth + 1, output);
    }
};

const levelOrder = (root) => {
  if (!root) return [];

  const output = [];

  traverse(root, 0, output);
  return output;
};

console.log(levelOrder(tree1));