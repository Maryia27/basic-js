function deleteDigit(n) {
  const numStr = String(n);
  return Math.max(...numStr.split('').map((_, i) => Number(numStr.slice(0, i) + numStr.slice(i + 1))));
}
