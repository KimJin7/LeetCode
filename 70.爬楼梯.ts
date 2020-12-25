/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
  const arr = [1, 2]
  let i = 2;
  while (i < n) {
    arr[i] = arr[i - 1] + arr[i - 2];
    i++;
  }
  return n === 1 ? arr[0] : arr[i - 1];
};
// @lc code=end

