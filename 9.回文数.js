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
  if (x < 0) return false;
  let anotherX = x;
  let reversed = 0;
  while (anotherX !== 0) {
    reversed = reversed * 10 + (anotherX % 10);
    anotherX = parseInt(anotherX / 10, 10);
  }
  return reversed === x;
};
// @lc code=end

