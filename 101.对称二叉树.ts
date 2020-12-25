/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root || root.val === null) return true;

  const compare = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if ((p && !q) || (!p && q)) return false;
    if (!p && !q) return true;
    if (p!.val !== q!.val) return false;
    return compare(p!.left, q!.right) && compare(p!.right, q!.left);
  }
  
  return compare(root!.left, root!.right);
};
// @lc code=end

