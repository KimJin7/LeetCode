/*
 * @lc app=leetcode.cn id=136 lang=typescript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  return nums.reduce((pre, curr, index) => {
    if (index === 0) {
      return pre;
    }
    return pre ^ curr;
  }, nums[0]);
};
// @lc code=end

