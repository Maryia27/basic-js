function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1;
  let separator = options.separator || '+';
  let addition = options.addition !== undefined ? String(options.addition) : '';
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  // Создание строки добавления с учётом repeatTimes и additionSeparator
  let additionStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Создание основной строки с учётом repeatTimes и separator
  let result = new Array(repeatTimes).fill(str + additionStr).join(separator);

  return result;
}
