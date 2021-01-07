/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  if (n <= 1) return 0;
  const origin = [];
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!origin[i]) {
      count++;
      let k = 2;
      while (i * k < n) {
        origin[i * k] = true;
        k++;
      }
    } else {
      continue;
    }
  }
  return count;
};
// @lc code=end

