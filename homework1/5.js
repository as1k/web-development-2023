var map = function(arr, fn) {
    var mapedArr = []
    for (var i = 0; i < arr.length; i++) {
        mapedArr[i] = fn(arr[i], i)
    }
    return mapedArr;
};
