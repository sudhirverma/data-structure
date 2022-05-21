// https://leetcode.com/problems/swap-nodes-in-pairs/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val) {
         var newNode = new ListNode(val);
         if (!this.head) {
             this.head = newNode;
             this.tail = this.head;
         } else {
             this.tail.next = newNode;
             this.tail = newNode;
         }
         this.length++;
         return this;
    }
}

const list1 = new SinglyLinkedList();
list1.push(1)
list1.push(2)
list1.push(3)
list1.push(4)


var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let slow = head;
    let fast = head.next;
    while (slow && fast) {
        let first = slow.val;
        let second = fast.val;
        slow.val = second;
        fast.val = first;
        slow = slow?.next?.next;
        fast = fast?.next?.next;
    }
    return head;
};

console.log(swapPairs(list1.head))