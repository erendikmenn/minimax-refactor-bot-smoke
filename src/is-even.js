export function isEven(value) {
  if (!Number.isInteger(value)) {
    return false;
  }

  return value % 2 === 0;
}
