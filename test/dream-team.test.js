function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  return members
      .filter(name => typeof name === 'string') // Фильтруем только строки
      .map(name => name.trim()[0].toUpperCase()) // Берём первую букву, удаляем пробелы и делаем заглавной
      .sort() // Сортируем буквы
      .join(''); // Объединяем в строку
}
