/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  let max = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(sum + nums[i], nums[i]);
    max = Math.max(sum, max);
  }
  return max;
};
// @lc code=end

