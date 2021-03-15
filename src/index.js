// You should implement your task here.

module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix) {
    return result;
  }
  matrix.forEach((item, i) => {
    if (i % 2 === 0) {
      result.push(...item)
    } else {
      result.push(...item.reverse())
    }
  });
  return result;
}