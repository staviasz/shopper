import { DbClient } from './prisma.helper';

jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        $connect: jest.fn(),
        $disconnect: jest.fn(),
      };
    }),
  };
});

describe('PrismaHelper', () => {
  it('should connect to the database', () => {
    const db = new DbClient();
    expect(db.client).toBeUndefined();

    db.connect();
    expect(db.client).toBeDefined();

    db.disconnect();
    expect(db.client).toBeUndefined();
  });
});
