function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let arr1 = s1.split('');
  let arr2 = s2.split('');

  for (let char of arr1) {
    let index = arr2.indexOf(char);
    if (index !== -1) {
      count++;
      arr2.splice(index, 1);
    }
  }

  return count;
}

module.exports = { getCommonCharacterCount };
