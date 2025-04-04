/**
 * Returns a resolved promise with user information
 * @param {String} firstName - User's first name
 * @param {String} lastName - User's last name
 * @return {Promise} A resolved promise with user object
 */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
