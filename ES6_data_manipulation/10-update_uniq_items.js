/**
 * Updates the quantity of items with initial quantity of 1 to 100
 * @param {Map} map - Map of items to quantities
 * @return {Map} Updated map
 * @throws {Error} If argument is not a map
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
