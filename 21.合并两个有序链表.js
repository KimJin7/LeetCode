/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2 ? l2 : null;
  if (!l2) return l1 ? l1 : null;
  let head = new ListNode(-1);
  const dummy = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      head.next = l2;
      l2 = l2.next;
    } else {
      head.next = l1;
      l1 = l1.next;
    }
    head = head.next;
  }

  while (l1) {
    head.next = l1;
    l1 = l1.next;
    head = head.next;
  }

  while (l2) {
    head.next = l2;
    l2 = l2.next;
    head = head.next;
  }

  return dummy.next;
};
// @lc code=end

