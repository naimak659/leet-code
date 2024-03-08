// Filter Elements from Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    for ( let x =0; x < arr.length; x++)
    {
        if (fn(arr[x], x))
        {
            newArr.push(arr[x])
        }
    }
    return newArr;

};