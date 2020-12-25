/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  if (rowIndex < 0) return [];
  const ans = new Array(rowIndex + 1).fill(0);
  let idx = 0;
  while (idx < rowIndex + 1) {
    for (let i = idx; i >= 0; i--) {
      if (i === 0 || i === idx) {
        ans[i] = 1;
      } else {
        ans[i] = ans[i - 1] + ans[i];
      }
    }
    idx += 1;
  }
  return ans;
};
// @lc code=end

