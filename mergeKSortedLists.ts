import { ListNode } from "./ListNode.ts";

function listToArray(list: ListNode | null): number[] {
  const ret: number[] = [];
  let head: ListNode | null = list;
  while (head != null) {
    ret.push(head.val);
    head = head.next;
  }
  return ret;
}

function arrayToList(array: number[]): ListNode | null {
  let head: ListNode | null = null;
  array.reverse().forEach(val => {
    head = new ListNode(val, head);
  });
  return head;
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const ret: number[] = [];
  while (lists.length > 0) {
    let min = Number.MAX_SAFE_INTEGER;
    let minIndex = -1;
    for (let i = 0; i < lists.length; i++) {
      let head = lists[i];
      if (!head) continue;
      if (head.val < min) {
        minIndex = i;
        min = head.val;
      }
    }
    if (minIndex != -1) {
      ret.push(min);
      let next = lists[minIndex]?.next;
      if (!next) lists.splice(minIndex, 1);
      else lists[minIndex] = next;
    } else break;
  }
  return arrayToList(ret);
};

function mergeKArray(arrays: number[][]) {
  return listToArray(mergeKLists(arrays.map(arrayToList)));
}

console.log(mergeKArray([[1, 4, 5], [1, 3, 4], [], [2, 6]]));
console.log(mergeKArray([[]]));