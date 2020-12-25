/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  let prevNum = map[s[i]]
  let sum = 0
  for (let i = 1; i < s.length;) {
    const num = map[s[i]]
    if (prevNum < num) {
      sum -= prevNum
    } else {
      sum += prevNum
    }
    prevNum = num
  }
  sum += prevNum
  return sum
};
// @lc code=end

