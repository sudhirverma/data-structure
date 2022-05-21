// https://leetcode.com/problems/reverse-nodes-in-k-group/

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
list1.push(5)

function swap(hash, slow, fast) {
    let first = hash[slow]['node'].val;
    let second = hash[fast]['node'].val;
    hash[slow]['node'].val = second;
    hash[fast]['node'].val = first;
}

var reverseKGroup = function(head, k) {
    if (k === 1) return head;
    let hash = {}
    let temp = head;
    let position = 1;
    let slow = 1
    let fast = k
    while (temp) {
        hash[position] = {node: temp, visit: false};
        position++;
        temp = temp.next;
    }
    while (hash[fast] && hash[fast]['node']) {
        let swapFast = fast;
        let swapSlow = slow;
        while (!hash[swapFast]['visit'] && !hash[swapSlow]['visit']) {
            swap(hash, swapSlow, swapFast);
            hash[swapFast]['visit'] = true;
            hash[swapSlow]['visit'] = true;
            swapFast--;
            swapSlow++
        }
        slow +=k
        fast +=k;
    }
    return head;
};


console.log(reverseKGroup(list1.head, 1));