import { mocked } from 'ts-jest/utils';
import { getHeaders } from './headers';
import platform from 'platform';

jest.mock('platform');

const mockedPlatform = mocked(platform, true);

describe('headers', () => {
  const parse = jest.fn();

  it('should set device name', () => {
    mockedPlatform.parse.mockReturnValueOnce({
      name: 'Sample Device',
      parse,
    });

    const headers = getHeaders();

    expect(headers.device).toEqual('Sample Device');
  });

  it('should set os when available', () => {
    mockedPlatform.parse.mockReturnValueOnce({
      os: 'Sample OS',
      parse,
    });

    const headers = getHeaders();

    expect(headers.os).toEqual('Sample OS');
  });

  it('should set os when unavailable', () => {
    mockedPlatform.parse.mockReturnValueOnce({
      parse,
    });

    const headers = getHeaders();

    expect(headers.os).toEqual('');
  });

  it('should set default platform', () => {
    mockedPlatform.parse.mockReturnValueOnce({
      parse,
    });

    const headers = getHeaders();

    expect(headers.platform).toEqual('belong');
  });

  it('should set default version', () => {
    mockedPlatform.parse.mockReturnValueOnce({
      parse,
    });

    const headers = getHeaders();

    expect(headers.version).toEqual('9.0');
  });
});
