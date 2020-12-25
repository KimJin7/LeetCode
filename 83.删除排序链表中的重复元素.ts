/*
 * @lc app=leetcode.cn id=83 lang=typescript
 *
 * [83] 删除排序链表中的重复元素
 */

// @lc code=start
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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head;
  let dummy = new ListNode(-1);
  dummy.next = head;
  while (head && head.next) {
    if (head.next.val === head.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return dummy.next;
};
// @lc code=end

