/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false
  let res = 0
  const tempX = x
  while (x > 0) {
    res = res * 10 + (x % 10)
    x = parseInt(x / 10, 10)
  }
  return res === tempX
};
// @lc code=end

