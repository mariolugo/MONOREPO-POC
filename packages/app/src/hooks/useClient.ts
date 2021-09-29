import { useMemo } from 'react';
import { BelongClient } from '@belong/client';
// import { useAuth } from './auth';

const baseURL = process.env.REACT_APP_API || '';

export function useClient() {
  //   const { userInfo } = useAuth();
  const client = useMemo(
    () =>
      new BelongClient({
        baseURL,
        token: 'sdfsadfsadfasdf',
        files: {
          baseURL: process.env.REACT_APP_FILES_API || '',
          token: process.env.REACT_APP_FILES_TOKEN || '',
        },
      }),
    [],
  );

  return client;
}
