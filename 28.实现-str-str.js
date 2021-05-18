/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  // 暴力解法，直接遍历
  // if (!needle) return 0;
  // const hLen = haystack.length;
  // const nLen = needle.length;
  // let i = 0;
  // let j = 0;
  // while (i < hLen - nLen + 1) {
  //   while (j < nLen && needle[j] === haystack[i]) {
  //     ++i;
  //     ++j;
  //   }
  //   if (j === nLen) return i - j;
  //   else {
  //     i = i - j + 1;
  //     j = 0;
  //   }
  // }
  // return -1;

  // KMP 算法
  if (!needle) return 0;
  if (!haystack) return -1;

  const kmp = (haystack, needle) => {
    const hLen = haystack.length;
    const nLen = needle.length;

    const getNext = (str) => {
      // next 为 KMP 算法的核心
      // 获取最长公共前后缀
      const arr = [];
      arr[0] = -1;
      let k = -1;
      for (let i = 1; i < str.length; i++) {
        // 重置 k
        while (k !== -1 && str[k + 1] !== str[i]) {
          k = arr[k]
        }
  
        if (str[k + 1] === str[i]) {
          ++k;
        }
        arr[i] = k;
      }
      return arr;
    }

    const next = getNext(needle);
    let j = 0;
    for (let i = 0; i < hLen; i++) {
      while (j > 0 && haystack[i] !== needle[j]) {
        j = next[j - 1] + 1;
        if (nLen - j + i > hLen) {
          return -1;
        }
      }

      if (haystack[i] === needle[j]) {
        ++j;
      }

      if (j === nLen) {
        return i - nLen + 1;
      }
    }
    return -1;
  }

  return kmp(haystack, needle)
};
// @lc code=end

