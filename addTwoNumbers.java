class ListNode {
    int val;
    ListNode next;

    ListNode() {
    }

    ListNode(int val) {
        this.val = val;
    }

    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}


class Record {
    ListNode head;
    ListNode tail;
}

class Solution {
    static Record list = new Record();

    static void retail(int val, ListNode node, Record list) {
        if (node == null) node = new ListNode(val, null);
        node.val = val;
        if (list.tail != null) list.tail.next = node;
        if (list.head == null) list.head = node;
        list.tail = node;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        list.head = null;
        list.tail = null;
        int value = 0;
        ListNode node = null;
        while (l1 != null || l2 != null) {
            if (l1 != null) {
                value += l1.val;
                l1 = l1.next;
                node = l1;
            }
            if (l2 != null) {
                value += l2.val;
                l2 = l2.next;
                if (node == null) node = l2;
            }
            retail(value % 10, node, list);
            value = value / 10;
        }
        if (value > 0) retail(value % 10, node, list);
        return list.head;
    }
}