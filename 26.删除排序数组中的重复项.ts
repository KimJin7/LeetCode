/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let i: number = 0;
  let j: number = 1;
  for (; j < nums.length;) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[i + 1] = nums[j];
      i++;
      j++;
    }
  }
  return i + 1;
};
// @lc code=end

