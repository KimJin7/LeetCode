/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let result = '1';
  let num = 2;
  while (num <= n) {
    let cnt = 1;
    let temp = '';
    for (let i = 1; i < result.length; i++) {
      if (result[i] !== result[i - 1]) {
        temp += `${cnt}${result[i - 1]}`;
        cnt = 1;
      } else {
        ++cnt;
      }
    }
    result = temp + `${cnt}${result[result.length - 1]}`;
    ++num;
  }
  return result;
};
// @lc code=end

