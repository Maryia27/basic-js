function getMatrixElementsSum(matrix) {
  let sum = 0;
  // Проходим по всем столбцам матрицы
  for (let i = 0; i < matrix[0].length; i++) {
    // Проходим по всем строкам в столбце
    for (let j = 0; j < matrix.length; j++) {
      // Если элемент равен 0, то все элементы ниже этого становятся недействительными
      if (matrix[j][i] === 0) break;
      sum += matrix[j][i];
    }
  }
  return sum;
}
