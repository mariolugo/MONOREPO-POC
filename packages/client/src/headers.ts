import platform from 'platform';

const DEFAULT_PLATFORM = 'belong';
const DEFAULT_VERSION = '1.0';

export function getHeaders(): { [key: string]: string } {
  // const userAgent = window.navigator.userAgent;
  // const info = platform.parse(userAgent);

  // return {
  //   device: info.name ?? 'Unknown',
  //   os: info.os?.toString() ?? '',
  //   platform: DEFAULT_PLATFORM,
  //   version: DEFAULT_VERSION,
  // };

  return {};
}
