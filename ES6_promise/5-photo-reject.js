/**
 * Returns a Promise rejecting with an error and filename message
 * @param {String} fileName - Name of the file
 * @return {Promise} A rejected Promise with an Error
 */
export default function uploadPhoto(fileName) {
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
