var once = function(fn) {
    var called = false
    var result
    return function(...args){
        if (called) {
            return undefined
        }
        called = true
        result = fn(...args)
        return result
    }
};
