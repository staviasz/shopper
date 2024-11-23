import { DbClientType } from '@/main/infra/db/prisma.helper';
import { Usecase } from '@/modules/ride/usecases/usecase';

type Input = {
  customerId: string;
  driverId?: number;
};

type Output = any;

export class GetRidesUsecase extends Usecase<Input, Output> {
  constructor(private readonly dbClient: DbClientType) {
    super();
  }
  async execute(dto: Input): Promise<Output> {
    const rides = await this.dbClient.rides.findMany({
      where: {
        customerId: dto.customerId,
        ...(dto.driverId && { driverId: dto.driverId }),
      },
      include: {
        driver: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },
      },
    });

    return {
      customer_id: dto.customerId,
      rides: rides.map(r => {
        return {
          id: r.id,
          date: r.date,
          origin: r.origin,
          destination: r.destination,
          distance: r.distance,
          duration: r.duration,
          driver: { id: r.driverId, name: `${r.driver.firstName} ${r.driver.lastName}` },
          value: r.value / 100,
        };
      }),
    };
  }
}
