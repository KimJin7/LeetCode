/*
 * @lc app=leetcode.cn id=38 lang=typescript
 *
 * [38] 外观数列
 */

// @lc code=start
function countAndSay(n: number): string {

  const count = (str: string) => {
    let ans = '';
    let i = 0;
    let j = 1;
    while (j <= str.length) {
      if (str[i] === str[j]) {
        j++;
      } else {
        ans += `${j - i}${str[i]}`;
        i = j;
        j += 1;
      }
    }
    return ans;
  }

  let i = 1;
  let ans = '1';
  while (i < n) {
    ans = count(ans);
    i++;
  }
  return ans;
};
// @lc code=end

