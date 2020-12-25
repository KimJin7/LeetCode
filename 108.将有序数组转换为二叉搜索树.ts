/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const sortedArr = (nums: number[], left: number, right: number): TreeNode | null => {
    if (left > right) {
      return null;
    }

    const mid = Math.round((left + right) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = sortedArr(nums, left, mid - 1);
    root.right = sortedArr(nums, mid + 1, right);
    return root;
  }

  return sortedArr(nums, 0, nums.length - 1);
};
// @lc code=end

