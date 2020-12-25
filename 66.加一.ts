/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i > -1; i--) {
    digits[i] = digits[i] + 1;
    if (digits[i] === 10) {
      digits[i] = 0;
      continue;
    }
    return digits
  }

  if (digits[0] === 0) {
    return [1, ...digits];
  }
  return digits;
};
// @lc code=end

