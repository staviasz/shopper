// fetch-adapter.spec.ts
import { RequestOptions } from '../contracts/external-requests.contract';
import { CustomHttpError } from '../errors/custom-http.erros';
import { FetchAdapter } from './fetch.adapter';

describe('FetchAdapter', () => {
  let fetchMock: jest.Mock;
  let fetchAdapter: FetchAdapter;

  beforeAll(() => {
    fetchMock = jest.fn();
    global.fetch = fetchMock;
  });

  beforeEach(() => {
    fetchAdapter = new FetchAdapter();
    fetchMock.mockClear();
  });

  it('should make a successful request and return response data', async () => {
    const mockResponse = {
      status: 200,
      json: jest.fn().mockResolvedValue({ message: 'Success' }),
      ok: true,
      statusText: 'OK',
    };

    fetchMock.mockResolvedValue(mockResponse);

    const requestData: RequestOptions = {
      url: 'https://api.example.com/resource',
      method: 'GET',
      headers: {
        Authorization: 'Bearer token',
      },
    };

    const response = await fetchAdapter.request(requestData);

    expect(fetchMock).toHaveBeenCalledWith(requestData.url, {
      method: requestData.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
    });

    expect(response).toEqual({
      status: 200,
      data: { message: 'Success' },
    });
  });

  it('should throw a CustomHttpError for a failed request', async () => {
    const mockResponse = {
      status: 404,
      json: jest.fn().mockResolvedValue({ error: 'Not Found' }),
      ok: false,
      statusText: 'Not Found',
    };

    fetchMock.mockResolvedValue(mockResponse);

    const requestData = {
      url: 'https://api.example.com/resource',
      method: 'GET',
    };

    await expect(fetchAdapter.request(requestData as RequestOptions)).rejects.toThrow(
      new CustomHttpError(404, 'Not Found'),
    );

    expect(fetchMock).toHaveBeenCalledWith(requestData.url, {
      method: requestData.method,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should build correct headers when headers are provided', async () => {
    const mockResponse = {
      status: 200,
      json: jest.fn().mockResolvedValue({}),
      ok: true,
      statusText: 'OK',
    };

    fetchMock.mockResolvedValue(mockResponse);

    const requestData = {
      url: 'https://api.example.com/resource',
      method: 'POST',
      headers: {
        Authorization: 'Bearer token',
        CustomHeader: 'CustomValue',
      },
      body: { key: 'value' },
    };

    await fetchAdapter.request(requestData as RequestOptions);

    expect(fetchMock).toHaveBeenCalledWith(requestData.url, {
      method: requestData.method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
        CustomHeader: 'CustomValue',
      },
      body: JSON.stringify({ key: 'value' }),
    });
  });

  it('should handle requests without body correctly', async () => {
    const mockResponse = {
      status: 200,
      json: jest.fn().mockResolvedValue({ message: 'No body' }),
      ok: true,
      statusText: 'OK',
    };

    fetchMock.mockResolvedValue(mockResponse);

    const requestData = {
      url: 'https://api.example.com/resource',
      method: 'GET',
    };

    const response = await fetchAdapter.request(requestData as RequestOptions);

    expect(fetchMock).toHaveBeenCalledWith(requestData.url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response).toEqual({
      status: 200,
      data: { message: 'No body' },
    });
  });

  it('should throw an error for a 400 bad request', async () => {
    const mockResponse = {
      status: 400,
      json: jest.fn().mockResolvedValue({ error: 'Bad Request' }),
      ok: false,
      statusText: 'Bad Request',
    };

    fetchMock.mockResolvedValue(mockResponse);

    const requestData = {
      url: 'https://api.example.com/resource',
      method: 'POST',
    };

    await expect(fetchAdapter.request(requestData as RequestOptions)).rejects.toThrow(
      new CustomHttpError(400, 'Bad Request'),
    );
  });
});
