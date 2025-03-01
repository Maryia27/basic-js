function minesweeper(matrix) {
    const result = matrix.map((row, i) => {
        return row.map((cell, j) => {
            // Если в ячейке есть мина
            if (cell) {
                return 1; // Мы просто отметим мину как 1
            }

            let count = 0;
            // Проверяем все соседние ячейки
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const newRow = i + x;
                    const newCol = j + y;

                    // Убедимся, что не выходим за границы массива
                    if (newRow >= 0 && newRow < matrix.length && newCol >= 0 && newCol < row.length) {
                        // Если соседняя ячейка содержит мину, увеличиваем счётчик
                        if (matrix[newRow][newCol]) {
                            count++;
                        }
                    }
                }
            }
            return count;
        });
    });
    return result;
}
