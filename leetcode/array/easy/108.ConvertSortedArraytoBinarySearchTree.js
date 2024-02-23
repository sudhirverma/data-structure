// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

class TreeNode {
    constructor(val, right, left) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function createTree(nums, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let treeNode = new TreeNode(nums[mid]);
    treeNode.left = createTree(nums, start, mid - 1);
    treeNode.right = createTree(nums, mid + 1, end);
    return treeNode;
}

function sortedArrayToBST(nums) {
    let result = createTree(nums, 0, nums.length - 1);
    return result;
}

let nums = [-10, -3, 0, 5, 9];

const result = sortedArrayToBST(nums);
console.log(result);