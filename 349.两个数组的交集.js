/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const getIntersection = (set1, set2) => {
    if (set1.size > set2.size) {
      return getIntersection(set2, set1);
    }

    const res = new Set();
    for (const num of set1) {
      if (set2.has(num)) {
        res.add(num);
      }
    }
    return [...res];
  }
  return getIntersection(set1, set2);
};
// @lc code=end

