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
  let ans = new ListNode(-1);
  const head = ans;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      ans.next = l1;
      l1 = l1.next;
    } else {
      ans.next = l2;
      l2 = l2.next;
    }
    ans = ans.next;
  }

  while (l1) {
    ans.next = l1;
    l1 = l1.next;
    ans = ans.next;
  }

  while (l2) {
    ans.next = l2;
    l2 = l2.next;
    ans = ans.next;
  }

  return head.next;
};
// @lc code=end

