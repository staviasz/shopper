import { PrismaClient } from '@prisma/client';

export type DbClientType = PrismaClient;

export class DbClient {
  private static prisma: DbClientType;
  static connect(): PrismaClient {
    DbClient.prisma = new PrismaClient();
    return DbClient.prisma;
  }

  static disconnect(): void {
    DbClient.prisma.$disconnect();
  }
}
