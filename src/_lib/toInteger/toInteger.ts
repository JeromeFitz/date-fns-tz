/**
 * @todo remove this file
 * Can assign via Number() instead in: toDate
 */
function toInteger(dirtyNumber: number | boolean): number {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  const number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

export { toInteger };
