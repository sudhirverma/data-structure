

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
list1.push(4)
list1.push(5)

const list2 = new SinglyLinkedList();
list2.push(1)
list2.push(3)
list2.push(4)

const list3 = new SinglyLinkedList();
list3.push(2)
list3.push(6)


var mergeKLists = function(lists) {
    let newList = []
    
    for (let i=0; i<lists.length; i++) {
        while (lists[i]) {
            newList.push(lists[i].val);
            lists[i] = lists[i].next;
        }
    }
    newList.sort((a,b) => a-b);
    let sorted=new ListNode()
    let curr=sorted
    for(let i=0;i<newList.length;i++){
        curr.next=new ListNode(newList[i])
        curr=curr.next;
    }
    return sorted.next;
};

console.log(mergeKLists([list1.head, list2.head, list3.head]))