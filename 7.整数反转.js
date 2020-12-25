/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNeg = x < 0
  x = Math.abs(x)
  let res = 0
  while (x > 0) {
    const n = x % 10
    res = res * 10 + n
    x = parseInt(x / 10, 10)
  }

  res = isNeg ? -res : res
  if (res > Math.pow(2, 31) - 1 || res <= -Math.pow(2, 31)) {
    return 0
  }
  return res
};
// @lc code=end

