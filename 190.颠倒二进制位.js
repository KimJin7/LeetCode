/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let ret = 0;
  let power = 32;
  while (power--) {
    ret <<= 1;
    ret += n & 1;
    n >>= 1;
  }
  return ret >>> 0;
};
// @lc code=end
