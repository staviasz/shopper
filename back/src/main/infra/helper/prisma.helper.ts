import { PrismaClient } from '@prisma/client';

export type DbClientType = PrismaClient;

class DbClient {
  private prisma!: DbClientType;

  get client(): DbClientType {
    return this.prisma;
  }

  public connect(): void {
    this.prisma = new PrismaClient();
  }

  public disconnect(): void {
    this.prisma.$disconnect();
  }
}

const db = new DbClient();
db.connect();

export default db;
