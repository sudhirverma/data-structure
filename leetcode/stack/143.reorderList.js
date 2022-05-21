// https://leetcode.com/problems/reorder-list/


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
// list1.push(3)
// list1.push(4)


var reorderList = function(head) {
    let stack = [];
    let temp = head;

    while(temp) {
        stack.push(temp.val);
        temp = temp.next;
    }
    if (stack.length === 2) {
        return head;
    }
    temp = head;
    while(stack.length) {
        let firstNode = stack.shift();
        let lastNode = stack.pop();
        temp.val = firstNode;
        if (lastNode) {
            temp.next.val = lastNode;
        }
        temp = temp?.next?.next;
    }
};

reorderList(list1.head)


