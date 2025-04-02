/**
 * Returns a string of all set values that start with a specific string
 * @param {Set} set - The Set to process
 * @param {String} startString - The string prefix to check
 * @return {String} String of filtered set values joined by -
 */
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString === '') {
    return '';
  }

  const filteredValues = [...set]
    .filter((value) => {
      if (typeof value === 'string' && value.startsWith(startString)) {
        return true;
      }
      return false;
    })
    .map((value) => value.substring(startString.length));

  return filteredValues.join('-');
}
