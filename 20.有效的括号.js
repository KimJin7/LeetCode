/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const last = stack[stack.length - 1];
    if (
      last &&
      (s[i] === ')' && last === '(') ||
      (s[i] === '}' && last === '{') ||
      (s[i] === ']' && last === '[')
    ) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
  }
  return stack.length === 0;
};
// @lc code=end

