import { CustomHttpError } from '@/services/errors/custom-http.erros';
import {
  ExternalRequestsContract,
  Headers,
  RequestOptions,
  Response,
} from './contracts/external-requests.contract';

export class FetchAdapter implements ExternalRequestsContract {
  async request({ url, method, headers, body }: RequestOptions): Promise<Response> {
    const response = await fetch(url, {
      method,
      headers: this.buildHeaders(headers),
      ...(body && { body: this.buildBody(body) }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new CustomHttpError(response.status, response.statusText);
    }

    return {
      status: response.status,
      data,
    };
  }

  private buildHeaders(headers?: Headers): any {
    return {
      'Content-Type': headers?.ContentType || 'application/json',
      ...headers,
    };
  }

  private buildBody(body: any): string {
    return JSON.stringify(body);
  }
}
