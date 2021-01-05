/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const getNext = (n) => {
    let totalSum = 0;
    while (n > 0) {
      const d = n % 10;
      n = Math.floor(n / 10);
      totalSum += d * d;
    }
    return totalSum;
  }

  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};
// @lc code=end

