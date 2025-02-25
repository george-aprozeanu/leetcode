/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}



function retail(val: number, node: ListNode | null, list: { head: ListNode | null, tail: ListNode | null }) {
    if (node === null) node = new ListNode(val, null);
    node.next = null;
    node.val = val;
    if (list.tail !== null) list.tail.next = node;
    if (list.head === null) list.head = node;
    list.tail = node;
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list = {head: null, tail: null};
    let value = 0;
    let node = null;
    while (l1 !== null || l2 !== null) {
        node = null;
        if (l1 !== null) {
            value += l1.val;
            node = l1;
            l1 = l1.next;
        }
        if (l2 !== null) {
            value += l2.val;
            node = l2;
            l2 = l2.next;
        }
        retail(value % 10 | 0, node, list);
        value = value / 10 | 0;
    }
    if (value > 0) retail(value % 10 | 0, null, list);
    return list.head;
}

function listFromArray(arr: number[]) {
    let list = null;
    for (let i = 0; i < arr.length; i++) {
        list = new ListNode(arr[i], list);
    }
    return list;
}

function arrayFromList(list: ListNode | null) {
    const ret = [];
    while (list !== null) {
        ret.unshift(list.val);
        list = list.next;
    }
    return ret;
}
console.log(arrayFromList(addTwoNumbers(listFromArray([2,4,3]), listFromArray([5,6,4]))));