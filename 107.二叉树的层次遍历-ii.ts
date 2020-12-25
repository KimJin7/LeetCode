/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrderBottom(root: TreeNode | null): number[][] {
  const ans = [];
  if (!root) {
    return ans;
  }
  const queue = [];
  queue.push(root);
  while (queue.length !== 0) {
    const level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const last = queue.shift();
      level.push(last.val);
      if (last.left) {
        queue.push(last.left);
      }

      if (last.right) {
        queue.push(last.right);
      }
    }
    
    ans.unshift(level);
  }
  return ans;
};
// @lc code=end

