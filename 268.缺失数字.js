/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const sum = nums.length * (nums.length + 1) / 2;
  const missing = nums.reduce((prev, curr) => {
    return prev - curr;
  }, sum);
  return missing;
};
// @lc code=end

