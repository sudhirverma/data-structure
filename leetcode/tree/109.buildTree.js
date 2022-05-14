// https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

class ListNode{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const list = new ListNode(-10);
list.next = new ListNode(-3);
list.next.next = new ListNode(0);
list.next.next.next = new ListNode(5);
list.next.next.next.next = new ListNode(9);

function buildTree(head, tail) {
    if(head === tail) {
        return null;
    }
    let fast = head, slow = head;

    while(fast !== tail && fast.next !== tail) {
        fast = fast.next.next;
        slow = slow.next;
    }

    const tree = new TreeNode(slow.val);
    tree.left = buildTree(head, slow);
    tree.right = buildTree(slow.next, tail);
    return tree;
}

var sortedListToBST = function(list) {
    return buildTree(list, null);
};

console.log(sortedListToBST(list))