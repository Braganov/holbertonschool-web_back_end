/**
 * Returns a Promise based on a boolean parameter
 * @param {boolean} success - Boolean to determine if promise should resolve or reject
 * @return {Promise} A Promise that resolves or rejects based on the input
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
