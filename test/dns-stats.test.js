function getDNSStats(domains) {
  let dnsStats = {};

  domains.forEach(domain => {
    let parts = domain.split('.').reverse(); // Разделяем и переворачиваем
    let key = '';

    parts.forEach(part => {
      key = key + '.' + part; // Формируем уровень домена
      dnsStats[key] = (dnsStats[key] || 0) + 1; // Увеличиваем счётчик
    });
  });

  return dnsStats;
}
