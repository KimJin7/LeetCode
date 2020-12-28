/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const plusOne = (s, j) => {
    const num = s[j] === '9'
      ? '0'
      : parseInt(s[j]) + 1 + '';
    const a = s.split('')
    a[j] = num;
    return a.join('');
  }

  const minusOne = (s, j) => {
    const num = s[j] === '0'
      ? '9'
      : parseInt(s[j]) - 1 + ''
    const a = s.split('')
    a[j] = num;
    return a.join('');
  }
  const queue = [];
  const visited = new Set();
  let step = 0;

  queue.unshift('0000');
  visited.add('0000');

  while (queue.length > 0) {
    const sz = queue.length;
    for (let i = 0; i < sz; i++) {
      const cur = queue.pop();
      if (deadends.includes(cur)) {
        continue
      }

      if (cur === target) {
        return step;
      }
      
      // 将相邻节点加入队列
      for (let j = 0; j < 4; j++) {
        const up = plusOne(cur, j);
        if (!visited.has(up)) {
          visited.add(up);
          queue.unshift(up);
        }
        const down = minusOne(cur, j);
        if (!visited.has(down)) {
          visited.add(down);
          queue.unshift(down);
        }
      }
    }
    step++;
  }
  return -1;
};
// @lc code=end

