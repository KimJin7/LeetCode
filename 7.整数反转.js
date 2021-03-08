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
// var reverse = function(x) {
//   const isPositive = x >= 0;
//   let param = x + ''
//   param = isPositive ? (x + '') : (x + '').substr(1);
//   let ans = parseInt(param.split('').reverse().join(''), 10)
//   ans = isPositive ? ans : -ans;
//   if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
//     return 0;
//   }
//   return ans;
// };
var reverse = function(x) {
  let ans = 0;
  while (x !== 0) {
    ans = ans * 10 + x % 10;
    x = parseInt(x / 10, 10);
  }
  if (ans < Math.pow(-2, 31) || ans > Math.pow(2, 31) - 1) {
    return 0;
  }
  return ans;
};
// @lc code=end

