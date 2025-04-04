import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/**
 * Handles profile signup by calling signUpUser and uploadPhoto functions
 * @param {String} firstName - User's first name
 * @param {String} lastName - User's last name
 * @param {String} fileName - File name to upload
 * @return {Promise} A Promise that resolves to an array of promises' status/value
 */
export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);

  return results.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
