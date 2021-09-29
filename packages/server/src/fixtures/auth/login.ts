import { LoginResult } from '@belong/client';

const login: LoginResult = {
  user: {
    uuid: '5694ae7e-5613-4a17-b227-6b9e3d69a659',

    username: 'john.doe',
    email: 'john.doe@belonghome.com',
    email_validated: false,
    first_name: 'John',
    last_name: 'Doe',
    user_id: '5694ae7e-5613-4a17-b227-6b9e3d69a659',
  },
  session: {
    id: '1a97b59f-cfd5-4fad-9f78-986059098ffb',
    user_uuid: '5694ae7e-5613-4a17-b227-6b9e3d69a659',
    token: '2cef85ad549911d5447f13f823c6d461527108b9',
    platform: 'belong',
    metadata: {
      device: 'Chrome',
      os: 'OS X 10.15.6 64-bit',
      version: '9.0',
      client: '315400',
    },
    created: '2020-10-02T16:30:45.762476-05:00',
    expired: '2020-11-01T16:30:45.704858-06:00',
  },
};
export default login;
