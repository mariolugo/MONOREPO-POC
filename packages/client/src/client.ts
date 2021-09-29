/**
 * belong API SDK. Allows you to create instances of a client
 * with access to the belong API.
 * @namespace belong
 * @see BelongClient
 */

import axios, { AxiosInstance } from 'axios';
import { LoginBody, LoginResponse } from './auth';
import { getHeaders } from './headers';
import { belongArgs } from './http';

/**
 * Configuration for the belong client.
 */
interface BelongClientConfig {
  /**
   * The base url of the API environment.
   */
  baseURL: string;

  /**
   * Authorization token for requests.
   */
  token?: string;

  /**
   * Default page size.
   */
  defaultPageSize?: number;

  /**
   * Files API configuration.
   */
  files?: {
    /**
     * The base url of the Files API.
     */
    baseURL: string;

    /**
     * Authorization token for requests.
     */
    token: string;
  };
}

/**
 * belong API client.
 * @class
 * @name BelongClient
 * @memberof belong
 * @param {BelongClientConfig} config - Client configuration parameters
 * @prop {string} config.baseURL - The base url of the API environment.
 * @prop {string} config.token - The token got from login service
 * @example
 * import { BelongClient } from '@belong/client';
 * const client = new BelongClient({
 *    baseURL: 'http://54.82.180.29:8000',
 *    token: '1234567890'
 * });
 */
export class BelongClient {
  /**
   * Axios instance.
   */
  protected readonly http: AxiosInstance;

  /**
   * Files axios instance.
   */
  protected readonly files: AxiosInstance;

  private readonly defaultPageSize: number;

  constructor({ baseURL, defaultPageSize = 10, token, files }: BelongClientConfig) {
    this.defaultPageSize = defaultPageSize;

    const headers: { [key: string]: string } = {
      ...getHeaders(),
    };

    if (token) {
      headers['Authorization'] = `Token ${token}`;
    }

    this.http = axios.create({
      baseURL,
      headers,
    });

    this.files = axios.create({
      baseURL: files?.baseURL ?? baseURL,
      headers: {
        Authorization: files?.token ?? token,
      },
    });
  }

  /**
   * Get user session information from login credentials.
   *
   * @param {LoginBody} body - The body of the request
   */
  async login(body: LoginBody): Promise<LoginResponse> {
    const response = await this.http.post<LoginResponse>('/v1/login/', body);

    return response.data;
  }

  protected getParams<T>({ filters, pagination }: belongArgs<T>): { [key: string]: string | number } {
    const params = {
      page: pagination?.page ?? 1,
      page_size: pagination?.page_size ?? this.defaultPageSize,
    };

    if (!filters) return params;

    return {
      ...Object.entries(filters).reduce(
        (a, [k, v]) => (v !== '' ? ((a[k] = v), a) : a),
        {} as { [key: string]: string },
      ),
      ...params,
    };
  }
}
