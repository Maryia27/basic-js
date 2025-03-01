function renameFiles(names) {
  let nameCount = {}; // Объект для отслеживания количества файлов с одинаковыми именами
  return names.map(name => {
    // Если файл с таким именем уже есть, добавляем суффикс
    if (nameCount[name]) {
      // Если суффикс уже был, увеличиваем его
      let newName = `${name}(${nameCount[name]})`;
      nameCount[newName] = 1;
      nameCount[name]++;
      return newName;
    } else {
      // Если имени файла нет, добавляем его и инициализируем счётчик
      nameCount[name] = 1;
      return name;
    }
  });
}
