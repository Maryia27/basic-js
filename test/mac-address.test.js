function isMAC48Address(address) {
  // Проверяем, что строка соответствует формату "XX-XX-XX-XX-XX-XX", где X — это цифры или буквы от A до F
  const regex = /^[0-9A-F]{2}(-[0-9A-F]{2}){5}$/i;
  return regex.test(address);
}
