function calculateHanoi(disksNumber, turnsSpeed) {
    // Количество ходов для решения задачи с n дисками равно 2^n - 1
    const turns = Math.pow(2, disksNumber) - 1;

    // Время в секундах на выполнение всех ходов
    const seconds = Math.floor(turns / (turnsSpeed / 3600));

    // Возвращаем объект с количеством ходов и временем
    return { turns, seconds };
}
