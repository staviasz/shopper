import {
  ExternalRequestsContract,
  Headers,
  RequestOptions,
  Response,
} from '@/main/contracts/external-requests.contract';
import { CustomHttpError } from '@/main/errors/custom-http.erros';
import { badRequest } from '@/main/helpers/http.helpers';

export class FetchAdapter implements ExternalRequestsContract {
  async request({ url, method, headers, body }: RequestOptions): Promise<Response> {
    console.log(this.buildHeaders(headers));

    const response = await fetch(url, {
      method,
      headers: this.buildHeaders(headers),
      ...(body && { body: this.buildBody(body) }),
    });

    const data = await response.json();

    console.log(data);

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

  private formatErros(response: Response): any {
    switch (response.status) {
      case 400:
        throw badRequest;
    }
  }
}
