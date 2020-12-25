/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  const ans = [];
  if (root.left) {
    ans.push(...inorderTraversal(root.left));
  }
  ans.push(root.val);
  if (root.right) {
    ans.push(...inorderTraversal(root.right));
  }
  return ans;
};
// @lc code=end

