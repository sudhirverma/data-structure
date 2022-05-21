// https://leetcode.com/problems/recover-binary-search-tree/

class NodeTree {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var tree = new NodeTree(1,3,null);
// tree.left = new NodeTree(3, null, null);
tree.left = new NodeTree(3, null, 2);
tree.left.right = new NodeTree(2, null, null);


// var tree = new NodeTree(3,1,4);
// tree.left = new NodeTree(1, null, null);
// tree.right = new NodeTree(4, 2, null);
// tree.right.left = new NodeTree(2, null, null);

const recoverTree = function (root) {
	let x = null,
		y = null,
		prev = null;
	const dfs = (node) => {
		if (!node) {
            return;
        }
		dfs(node.left);
		if (prev && node.val < prev.val) {
			if (x == null) x = prev;
			y = node;
		}
		prev = node;
		dfs(node.right);
	};
	dfs(root);
	[x.val, y.val] = [y?.val, x?.val];
    return root
};


console.log(recoverTree(tree))

// iterative


// const recoverTree = function (root) {
// 	const stack = [];
// 	let node = root,
// 		prev = null,
// 		x = null,
// 		y = null;
// 	while (stack.length || node) {
// 		if (node) {
// 			stack.push(node);
// 			node = node.left;
// 			continue;
// 		}
// 		node = stack.pop();
// 		if (prev && prev.val > node.val) {
// 			y = node;
// 			if (!x) x = prev;
// 			else break;
// 		}
// 		prev = node;
// 		node = node.right;
// 	}
// 	[x.val, y.val] = [y.val, x.val];
// };