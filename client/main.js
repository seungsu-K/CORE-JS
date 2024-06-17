const pow = (numeric, powerCount) =>
  Array(powerCount)
    .fill(numeric)
    .reduce((acc, cur) => (acc *= cur));
