/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  if (x <= 1) return x;
  let left = 1, right = x;
  let ans = -1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid <= x) {
      ans = mid;
      left = mid + 1;
    }
  }
  return ans;
};
// @lc code=end

