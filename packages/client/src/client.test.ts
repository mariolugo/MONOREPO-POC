import { BelongClient } from './client';
import axios from 'axios';
import { getHeaders } from './headers';
import { setupServer } from '@belong/server';

describe('BelongClient', () => {
  const baseURL = '';

  describe('constructor', () => {
    const spy = jest.spyOn(axios, 'create');

    afterEach(() => {
      spy.mockClear();
    });

    it('should set required headers.', () => {
      const headers = getHeaders();

      new BelongClient({ baseURL });
      const config = spy.mock.calls[0][0];

      expect(config?.headers).toBeDefined();
      expect(config?.headers).toMatchObject(headers);
    });

    it('should set `Authorization` header.', () => {
      const token = 'foobar';

      new BelongClient({ baseURL, token });
      const config = spy.mock.calls[0][0];

      expect(config?.headers['Authorization']).toEqual(`Token ${token}`);
    });

    it('should not set `Authorization` header.', () => {
      new BelongClient({ baseURL });

      const config = spy.mock.calls[0][0];

      expect(config?.headers).toBeDefined();
      expect(config?.headers).not.toHaveProperty('Authorization');
    });

    it('should use correct `baseURL`', () => {
      new BelongClient({ baseURL });

      const config = spy.mock.calls[0][0];

      expect(config?.baseURL).toEqual(baseURL);
    });
  });

  describe('requests', () => {
    const server = setupServer();

    beforeAll(() => {
      server.listen();
    });

    afterEach(() => {
      server.resetHandlers();
    });

    afterAll(() => {
      server.close();
    });

    describe('login', () => {
      it('should post to endpoint and return data', async () => {
        const client = new BelongClient({ baseURL });

        const result = await client.login({ email: 'john.doe@belonghome.com', password: '12345' });

        expect(result).toMatchInlineSnapshot(`
          Object {
            "body": Object {
              "results": Array [
                Object {
                  "session": Object {
                    "created": "2020-10-02T16:30:45.762476-05:00",
                    "expired": "2020-11-01T16:30:45.704858-06:00",
                    "id": "1a97b59f-cfd5-4fad-9f78-986059098ffb",
                    "metadata": Object {
                      "client": "315400",
                      "device": "Chrome",
                      "os": "OS X 10.15.6 64-bit",
                      "version": "9.0",
                    },
                    "platform": "belong",
                    "token": "2cef85ad549911d5447f13f823c6d461527108b9",
                    "user_uuid": "5694ae7e-5613-4a17-b227-6b9e3d69a659",
                  },
                  "user": Object {
                    "email": "john.doe@belonghome.com",
                    "email_validated": false,
                    "first_name": "John",
                    "last_name": "Doe",
                    "user_id": "5694ae7e-5613-4a17-b227-6b9e3d69a659",
                    "username": "john.doe",
                    "uuid": "5694ae7e-5613-4a17-b227-6b9e3d69a659",
                  },
                },
              ],
            },
            "errors": Array [],
            "status_code": 200,
          }
        `);
      });
    });
  });
});
