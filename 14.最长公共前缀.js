/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs || strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const minLength = Math.min(strs[i].length, prefix.length);
    let index = 0
    while (index < minLength && prefix[index] === strs[i][index]) {
      index++;
    }
    prefix = prefix.substr(0, index);
    if (prefix.length === 0) {
      break;
    }
  }
  return prefix;
};
// @lc code=end

