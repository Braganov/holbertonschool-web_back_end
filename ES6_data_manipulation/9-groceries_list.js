/**
 * Returns a Map of groceries with item names and quantities
 * @return {Map} Map of grocery items and their quantities
 */
export default function groceriesList() {
  const groceries = new Map();

  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);

  return groceries;
}
