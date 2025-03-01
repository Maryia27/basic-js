function getEmailDomain(email) {
  // Разделяем email на части по символу "@", и возвращаем последнюю часть (домен)
  return email.split('@').pop();
}
