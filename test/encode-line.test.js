function encodeLine(str) {
  let result = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        result += count + str[i - 1];
      } else {
        result += str[i - 1];
      }
      count = 1;
    }
  }

  return result;
}
