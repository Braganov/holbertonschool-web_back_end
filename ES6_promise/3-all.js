import { uploadPhoto, createUser } from './utils';

/**
 * Collectively resolves all promises and logs results to console
 * @return {Promise} Promise that resolves when all tasks complete
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
