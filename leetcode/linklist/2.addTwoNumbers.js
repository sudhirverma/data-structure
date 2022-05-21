// https://leetcode.com/problems/add-two-numbers/

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
const list2 = new SinglyLinkedList();
list1.push(2)
list1.push(4)
list1.push(3)

list2.push(5)
list2.push(6)
list2.push(4)

var addTwoNumbers = (l1, l2) => {
    console.log(l1, l2);
    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0;

    while (l1!==null || l2!== null || sum>0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;
    }
    return list.next;
};


console.log(addTwoNumbers(list1.head, list2.head))

