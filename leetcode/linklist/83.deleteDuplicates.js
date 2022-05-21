// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

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
        this.length = 0;
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
list1.push(-3);
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(3);
list1.push(4);
list1.push(4);
list1.push(5);



var deleteDuplicates = function(head) {
    if (!head || !head.next) return head;
    let hash = new Map();
    let temp = head;
    let newList = new ListNode();
    let newHead = newList;
    while(temp) {
        if (!hash.get(temp.val)) {
            hash.set(temp.val, {node: temp, duplicate: false});
        } else {
            hash.set(temp.val, {node: temp, duplicate: true});
        }
        temp = temp.next;
    }
    hash.forEach(value => {
        newHead.next = new ListNode(value.node.val);
        newHead = newHead.next;
    })

    return newList.next;
};