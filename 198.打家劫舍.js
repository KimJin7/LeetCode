/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  let prev = nums[0];
  let pprev = 0;
  let res = 0;
  for (let i = 1; i < nums.length; i++) {
    res = Math.max(nums[i] + pprev, prev);
    pprev = prev;
    prev = res;
  }
  return res;
};
// @lc code=end

