/**
 * Divides two numbers and handles division by zero case
 * @param {Number} numerator - The numerator
 * @param {Number} denominator - The denominator
 * @return {Number} Result of division
 * @throws {Error} When denominator is zero
 */
export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }

  return numerator / denominator;
}
