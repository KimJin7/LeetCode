/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  const rotateArr = (nums, i, j) => {
    while (i < j) {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
      j--;
    }
  }

  k = k % nums.length
  rotateArr(nums, 0, nums.length - 1);
  rotateArr(nums, 0, k - 1);
  rotateArr(nums, k, nums.length - 1);
};
// @lc code=end

