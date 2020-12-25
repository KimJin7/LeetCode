/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
// @lc code=end

