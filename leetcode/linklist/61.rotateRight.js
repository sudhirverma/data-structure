// https://leetcode.com/problems/rotate-list/

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
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);

var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let prev = head, curr = head;
    let start = head, temp = head;
    let size = 0;

	//calculate size of list
    while(temp) {
       size++;
       temp = temp.next;
    }

	//avoid TLE by taking mod with size
    let rotate = k % size;

    //attach curr to head 'rotate' times
    while(rotate > 0) {
        //move to last node
        while(curr.next) {
            prev = curr;
            curr = curr.next;
        }

        //adjust pointers
        prev.next = curr.next;
        curr.next = start; //point to head
        start = curr;
        prev = curr;
        rotate--;
    }

    return start;
};

console.log(rotateRight(list1.head, 4));