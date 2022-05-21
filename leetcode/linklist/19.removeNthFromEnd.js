// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

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
// list1.push(5)


var removeNthFromEnd = function(head, n) {
    let temp = head;
    let headSize = 0;

    while (temp) {
        temp = temp.next;
        headSize++;
    }

    if (headSize === n) {
        head = head.next
    } else {
        let diff = headSize - n;
        temp = head;
        while (diff !== 1) {
            temp = temp.next;
            diff--
        }
        temp.next = temp.next.next;
    }
    return head;
};

console.log(removeNthFromEnd(list1.head, 2));

// [1,2]
//  2
//  t
// n = 2
// diff = head (size) - n // 5 - 3

// diff = 
