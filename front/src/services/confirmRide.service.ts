import { FetchAdapter } from '@/adapter/fetch.adapter';

type Input = {
  customerId: string;
  origin: string;
  destination: string;
  driver: {
    id: number;
    name: string;
  };
  distance: number;
  duration: string;
  value: number;
};

type Output = {
  success: boolean;
};

export const confirmRide = async (body: Input): Promise<Output> => {
  const fetchAdapter = new FetchAdapter();

  await fetchAdapter.request({
    url: 'http://localhost:8080/ride/confirm',
    method: 'PATCH',
    body: { ...body, customer_id: body.customerId },
  });

  return {
    success: true,
  };
};
