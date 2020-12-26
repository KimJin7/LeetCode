/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let low = i + 1;
    let high = numbers.length - 1;
    while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low;
      if (numbers[mid] === target - numbers[i]) {
        return [i + 1, mid + 1];
      } else if (numbers[mid] > target - numbers[i]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return [-1, -1];
};
// @lc code=end

