// https://leetcode.com/problems/sort-list/

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
list1.push(4)
list1.push(2)
list1.push(1)
list1.push(3)


var sortList = function(head) {
    let list = [];
    let temp = head;
    while(temp) {
        list.push(temp.val);
        temp = temp.next;
    }
    let newLinkList = new ListNode();
    let newTemp = newLinkList;
    let sortedArray = mergeSort(list);
    for (let i = 0; i < sortedArray.length; i++) {
        newTemp.next = new ListNode(sortedArray[i]);
        newTemp = newTemp.next;
    }
    return newTemp.next;
};

let merge = (arr1, arr2) => {
    let sort = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] < arr1[i]) {
            sort.push(arr2[j]);
            j++;
        } else {
            sort.push(arr1[i]);
            i++;
        }
    }
    while (i < arr1.length) {
        sort.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        sort.push(arr2[j]);
        j++;
    }
    return sort;
}

let mergeSort = (list) => {
    if (list.length <=1) return list;
    let mid = Math.floor(list.length/2);
    let left = mergeSort(list.slice(0, mid));
    let right = mergeSort(list.slice(mid));
    return merge(left, right);
}

console.log(sortList(list1.head));