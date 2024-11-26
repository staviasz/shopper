import { FetchAdapter } from '@/adapter/fetch.adapter';
import { Driver } from '@/types/driver.type';

type Input = {
  customerId: string;
  origin: string;
  destination: string;
};

type Output = {
  data: {
    origin: {
      latitude: number;
      longitude: number;
    };
    destination: {
      latitude: number;
      longitude: number;
    };
    options: Driver[];
    distance: number;
    duration: string;
    routeResponse: any;
  };
};

export const getDriverOptions = async (body: Input): Promise<Output> => {
  const fetchAdapter = new FetchAdapter();

  const response = await fetchAdapter.request({
    url: 'http://localhost:8080/ride/estimate',
    method: 'POST',
    body: {
      ...body,
      customer_id: body.customerId,
    },
  });

  return {
    data: response.data,
  };
};
