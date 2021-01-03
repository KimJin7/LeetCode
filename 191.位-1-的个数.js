/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  // 解法来源： https://baike.baidu.com/item/%E6%B1%89%E6%98%8E%E9%87%8D%E9%87%8F
  n = (n & 0x55555555) + ((n >> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
  n = (n & 0x0F0F0F0F) + ((n >> 4) & 0x0F0F0F0F);
  n = (n * 0x01010101) >> 24;
  return n;
};
// @lc code=end

