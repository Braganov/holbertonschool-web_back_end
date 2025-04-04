/**
 * Handles a Promise with three handlers
 * @param {Promise} promise - The Promise to handle
 * @return {Promise} A Promise with the specified handlers
 */
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}
