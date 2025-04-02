/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position
 * @param {Number} length - Length of the ArrayBuffer
 * @param {Number} position - Position to set the value
 * @param {Number} value - Int8 value to set
 * @return {DataView} DataView of the ArrayBuffer
 * @throws {Error} If position is outside range
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const dataView = new DataView(buffer);

  dataView.setInt8(position, value);

  return dataView;
}
