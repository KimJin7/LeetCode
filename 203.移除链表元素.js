/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  const pHead = dummy
  while (dummy.next) {
    if (dummy.next.val === val) {
      dummy.next = dummy.next.next;
    } else {
      dummy = dummy.next;
    }
  }
  return pHead.next;
};
// @lc code=end

