import { env } from '@/main/configs/env';
import { ExternalRequestsContract } from '@/main/contracts/external-requests.contract';

type Input = {
  origin: string;
  destination: string;
};

type Output = {
  response: any;
  duration: string;
  distanceMeters: number;
  polyline: string;
  origin: any;
  destination: any;
};

export class ApiRoutesService {
  constructor(private readonly externalRequests: ExternalRequestsContract) {}

  async execute({ origin, destination }: Input): Promise<Output> {
    const { data } = await this.externalRequests.request({
      url: `https://routes.googleapis.com/directions/v2:computeRoutes?key=${env.googleApiKey}`,
      method: 'POST',
      headers: {
        'X-Goog-FieldMask': '*',
      },
      body: {
        origin: { address: origin },
        destination: { address: destination },
      },
    });

    return {
      response: data,
      duration: data.routes[0].localizedValues.duration.text,
      distanceMeters: data.routes[0].distanceMeters,
      polyline: data.routes[0].polyline.encodedPolyline,
      origin: data.routes[0].legs[0].startLocation.latLng,
      destination: data.routes[0].legs[0].endLocation.latLng,
    };
  }
}
