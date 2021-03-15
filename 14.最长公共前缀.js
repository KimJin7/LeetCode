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
  if (strs.length === 0) return '';
  let answer = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const word = strs[i];
    let j = 0;
    if (answer[j] !== word[j]) return ''
    while (answer[j] && word[j] && answer[j] === word[j]) {
      j++;
    }
    answer = answer.substr(0, j);
  }
  return answer;
};
// @lc code=end

