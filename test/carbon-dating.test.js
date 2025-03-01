function dateSample(sampleActivity) {
  if (
      typeof sampleActivity !== 'string' ||
      isNaN(parseFloat(sampleActivity)) ||
      parseFloat(sampleActivity) <= 0 ||
      parseFloat(sampleActivity) > 15
  ) {
    return false;
  }

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  const k = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;

  return Math.ceil(age);
}