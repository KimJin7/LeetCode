/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  const hL = haystack.length;
  const nL = needle.length;
  if (nL === 0) return 0;

  const next = generateNext(needle);
  for (let i = 0, j = 0; i < hL;) {
    // 字符匹配，都增长
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === nL) return i - j;
    // 字符不匹配，进行回退
    if (haystack[i] !== needle[j]) {
      if (j > 0) {
        j = next[j - 1];
      } else {
        i++;
      }
    }
  }
  return -1;
};

function generateNext(pattern: string) {
  let i = 0;
  let j = 1;
  const next = new Array(pattern.length).fill(0);
  while (j < pattern.length) {
    if (pattern[i] === pattern[j]) {
      i++;
      next[j] = i;
      j++;
    } else {
      if (i > 0) {
        i = next[i - 1];
      } else {
        next[j++] = 0;
      }
    }
  }
  return next;
}
// BF 算法，暴力
// function strStr(haystack: string, needle: string): number {
//   const nL = needle.length;
//   const hL = haystack.length;
//   if (nL === 0) return 0;
//   let pn = 0;
//   while (pn < hL - nL + 1) {
//     while (pn < hL - nL + 1 && haystack[pn] !== needle[0]) {
//       ++pn;
//     }

//     let cL = 0;
//     let pL = 0;
//     while (pL < nL && pn < hL && haystack[pn] === needle[pL]) {
//       ++cL;
//       ++pn;
//       ++pL;
//     }

//     if (cL === nL) return pn - nL;

//     pn = pn - cL + 1;
//   }
//   return -1;
// };
// @lc code=end

