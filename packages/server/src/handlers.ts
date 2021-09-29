import { rest } from 'msw';
import { login } from './fixtures';

const baseUrl = process.env.REACT_APP_API || '';

const getLogin = rest.post(`${baseUrl}/v1/login/`, (req, res, ctx) => {
  const password = (req.body as any).password;
  console.log('password', password, password !== '12345');
  if (password !== '12345') {
    return res(
      ctx.status(403),
      ctx.json({
        body: {
          results: [],
        },
        errors: [
          {
            message: 'Email or password incorrect',
          },
        ],
        status_code: 403,
      }),
    );
  }

  return res(
    ctx.json({
      body: {
        results: [login],
      },
      errors: [],
      status_code: 200,
    }),
  );
});

const handlers = [getLogin];

export default handlers;
