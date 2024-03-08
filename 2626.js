// Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    const len = nums.length;
    for(let x =0; x < len; x++)
    {
        init = fn(init, nums[x])
    }
    return init;
};