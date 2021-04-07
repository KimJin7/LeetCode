/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  if (!nums || !nums.length) return -1;
  let slow = 0;
  for (let fast = 0; fast < nums.length;) {
    if (nums[fast] === val) {
      fast++;
    } else {
      nums[slow++] = nums[fast++];
    }
  }
  return slow;
};
// @lc code=end

