//Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let len = functions.length -1;
    return function(x) {
        for(let n = len; n >= 0; n--)
        {
            x = functions[n](x);
        }
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */