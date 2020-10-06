
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    var arr = [];
    for (var i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            arr = arr.concat(matrix[i].reverse());
        } else arr = arr.concat(matrix[i]);
    }
    return arr;
}
