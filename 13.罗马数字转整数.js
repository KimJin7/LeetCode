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
  if (s.length === 0) return 0
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  
  let ans = map[s[0]];
  for (let i = 1; i < s.length; i++) {
    const prev = map[s[i - 1]];
    const cur = map[s[i]];
    if (prev >= cur) {
      ans += cur;
    } else {
      ans += cur - 2 * prev;
    }
  }
  return ans;
};
// @lc code=end

