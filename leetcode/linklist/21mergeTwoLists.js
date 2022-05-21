// https://leetcode.com/problems/merge-two-sorted-lists/

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
list1.push(4)

const list2 = new SinglyLinkedList();
list2.push(1)
list2.push(3)
list2.push(4)

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(null);
    let newList = dummyHead;
    let firstList = list1;
    let secondList = list2;
    while (firstList && secondList) {
        if (firstList.val > secondList.val) {
            newList.next = secondList;
            secondList = secondList.next
        } else {
            newList.next = firstList;
            firstList = firstList.next
        }
        newList = newList.next
    }

    if (firstList) {
        newList.next = firstList;
    }

    if (secondList) {
        newList.next = secondList;
    }
    return dummyHead.next
};


console.log(mergeTwoLists(list1.head, list2.head))


