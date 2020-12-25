/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false; 
  let slow = head;
  let fast = head.next;
  while (slow && fast) {
    if (slow.val !== fast.val) {
      slow = slow.next ? slow.next : null;
      fast = fast.next ? fast.next.next : null;
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end

