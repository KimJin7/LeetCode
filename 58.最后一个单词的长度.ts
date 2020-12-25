/*
 * @lc app=leetcode.cn id=58 lang=typescript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // if (!s) return 0;
  // const str = s.trim().split(' ').pop()
  // return str ? str.length : 0;
  let end = s.length - 1;
  while (end >= 0 && s[end] === ' ') end--;
  if (end < 0) return 0;
  let start = end;
  while (start >= 0 && s[start] !== ' ') start--;
  return end - start;
};
// @lc code=end

