import { FetchAdapter } from '@/adapter/fetch.adapter';
import { RideDone } from '@/types/ride.type';

type Input = {
  customerId: string;
  driverId?: number;
};

type Output = {
  data: {
    customerId: string;
    rides: RideDone[];
  };
};

export const getRidesByCustomer = async (body: Input): Promise<Output> => {
  const fetchAdapter = new FetchAdapter();

  const response = await fetchAdapter.request({
    url: `http://localhost:8080/ride/${body.customerId}?driver_id=${body.driverId}`,
    method: 'GET',
  });
  return {
    data: response.data,
  };
};
