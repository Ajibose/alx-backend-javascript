import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let body;
  let firstName;
  let lastName;
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      body = values[0].body;
      firstName = values[1].firstName;
      lastName = values[1].lastName;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
