/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  if (this.minStack.length === 0) {
    this.minStack.push(x);
  } else {
    const prevMin = this.minStack[this.minStack.length - 1];
    this.minStack.push(prevMin > x ? x : prevMin);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length !== 0) {
    return this.stack[this.stack.length - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.minStack.length !== 0) {
    return this.minStack[this.minStack.length - 1];
  }
  return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

