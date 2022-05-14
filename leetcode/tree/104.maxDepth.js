// https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
// tree1.right.left = new NodeTree(15, 5, 10);
tree1.right.right = new NodeTree(7, null, null);
// tree1.right.left.left = new NodeTree(5, null, null);
// tree1.right.left.right = new NodeTree(10, null, null);
// tree1.left.left = new NodeTree(8, 1, 2);
// tree1.left.right = new NodeTree(6, 3, 4);
// tree1.left.right.left = new NodeTree(3, null, null);
// tree1.left.right.right = new NodeTree(4, null, null);
// tree1.left.left.left = new NodeTree(1, null, null);
// tree1.left.left.right = new NodeTree(2, null, null);

const maxDepth = root => {
	if (!root) return 0;

	const queue = [root];
	let max = 0;

	while (queue.length) {
		const len = queue.length;

		// traverse level by level
		for (let i = 0; i < len; i++) {
			const node = queue.shift();

			// traverse next level
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		// after each level traversal, increment max depth by 1
		max++;
	}

	return max;
};
console.log(maxDepth(tree1))