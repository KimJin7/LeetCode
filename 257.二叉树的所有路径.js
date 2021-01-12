/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  const paths = []
  const pathQueue = [root.val + ''];
  const nodeQueue = [root];
  while (nodeQueue.length) {
    const node = nodeQueue.shift();
    const path = pathQueue.shift();
    if (node.left === null && node.right === null) {
      paths.push(path);
    } else {
      if (node.left !== null) {
        nodeQueue.push(node.left);
        pathQueue.push(`${path}->${node.left.val}`)
      }

      if (node.right !== null) {
        nodeQueue.push(node.right);
        pathQueue.push(`${path}->${node.right.val}`)
      }
    }
  }
  return paths;
};
// @lc code=end

