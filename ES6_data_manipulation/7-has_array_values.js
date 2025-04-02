/**
 * Checks if all elements in the array exist within the set
 * @param {Set} set - The Set to check against
 * @param {Array} array - Array of values to check
 * @return {Boolean} True if all array elements exist in the set, false otherwise
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
