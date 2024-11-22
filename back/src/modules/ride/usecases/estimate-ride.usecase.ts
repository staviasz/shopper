import { DbClientType } from '@/main/infra/db/prisma.helper';
import { ApiRoutesService } from '@/modules/ride/services/api-routes.service';
import { Usecase } from '@/modules/ride/usecases/usecase';
import { Driver } from '../types';

type Input = {
  origin: string;
  destination: string;
  customerId: string;
};
type latLng = {
  latitude: number;
  longitude: number;
};
type Output = {
  origin: latLng;
  destination: latLng;
  options: any;
  routeResponse: any;
};

export class EstimateRideUsecase extends Usecase<Input, Output> {
  constructor(
    private readonly apiRoutesService: ApiRoutesService,
    private readonly dbClient: DbClientType,
  ) {
    super();
  }
  async execute(dto: Input): Promise<Output> {
    const { response, distanceMeters, origin, destination } = await this.apiRoutesService.execute({
      origin: dto.origin,
      destination: dto.destination,
    });
    console.log(origin);

    const distanceKm = distanceMeters / 1000;

    const drivers = await this.getDrivers(distanceKm);
    const responseDrivers = this.formatResponseDrivers(drivers, distanceKm);
    return {
      origin: {
        latitude: origin.latitude,
        longitude: origin.longitude,
      },
      destination: {
        latitude: destination.latitude,
        longitude: destination.longitude,
      },
      options: responseDrivers,
      routeResponse: response,
    };
  }

  private async getDrivers(distanceKm: number): Promise<Driver[]> {
    const drivers = await this.dbClient.driver.findMany({
      where: { options: { minimumKm: { lte: distanceKm } } },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        description: true,
        car: true,
        options: true,
        rates: true,
      },
    });
    return drivers;
  }

  private formatResponseDrivers(drivers: Driver[], distanceKm: number) {
    return drivers.map(driver => {
      return {
        id: driver.id,
        name: `${driver.firstName} ${driver.lastName}`,
        description: driver.description,
        vehicle: `${driver.car.make} ${driver.car.model} ${driver.car.year} ${driver.car.color} ${driver.car.description}`,
        review: { rating: driver.rates[0].rate, comment: driver.rates[0].comment },
        value: (driver.options.ratePerKm / 100) * distanceKm,
      };
    });
  }
}