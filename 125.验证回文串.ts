/*
 * @lc app=leetcode.cn id=125 lang=typescript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isPalindrome(s: string): boolean {
  let i = 0, j = s.length - 1;
  while (i < j) {
    const reg = /[a-zA-Z0-9]/
    if (!reg.test(s[i])) {
      i++;
      continue;
    }

    if (!reg.test(s[j])) {
      j--;
      continue;
    }


    if (s[i].toUpperCase() !== s[j].toUpperCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
// @lc code=end

