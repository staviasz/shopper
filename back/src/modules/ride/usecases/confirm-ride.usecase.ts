import { CustomHttpError } from '@/main/errors/custom-http.erros';
import { DbClientType } from '@/main/infra/db/prisma.helper';
import { Usecase } from './usecase';

type Input = {
  customerId: string;
  origin: string;
  destination: string;
  distance: number;
  driver: {
    id: number;
    name: string;
  };
  duration: string;
  value: number;
};

type Output = void;

export class ConfirmRideUsecase implements Usecase<Input, Output> {
  constructor(private readonly dbClient: DbClientType) {}

  async execute(dto: Input): Promise<Output> {
    const driver = await this.dbClient.driver.findUnique({
      where: { id: dto.driver.id },
      select: {
        id: true,
        OptionDriver: { select: { minimumKm: true } },
      },
    });

    if (!driver) {
      throw new CustomHttpError(400, 'Driver not found');
    }

    if (driver.OptionDriver?.minimumKm! > dto.distance) {
      throw new CustomHttpError(406, 'Distance not available');
    }

    await this.dbClient.rides.create({
      data: {
        customerId: dto.customerId,
        origin: dto.origin,
        destination: dto.destination,
        distance: dto.distance,
        driverId: dto.driver.id,
        duration: dto.duration,
        value: Number.isInteger(dto.value) ? dto.value : dto.value * 100,
      },
    });
  }
}
