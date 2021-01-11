/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  const sMap = {};
  const tMap = {};
  for (let i = 0; i < s.length; i++) {
    if (!sMap[t[i]] && !tMap[s[i]]) {
      sMap[t[i]] = s[i];
      tMap[s[i]] = t[i];
    } else {
      console.log(sMap[t[i]])
      console.log(s[i])
      
      if (sMap[t[i]] !== s[i] || tMap[s[i]] !== t[i]) {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end

