import dbClient from '../../helper/prisma.helper';

dbClient.connect();
const prisma = dbClient.client;

const drivers = [
  {
    id: 1,
    firstName: 'Homer',
    lastName: 'Simpson',
    description:
      'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
    car: {
      id: 1,
      model: 'Plymouth',
      make: 'Valiant',
      color: 'rosa',
      year: 1973,
      description: 'e enferrujado',
    },
    options: {
      id: 1,
      ratePerKm: 250,
      minimumKm: 1,
    },
    rates: [
      {
        id: 1,
        rate: 2,
        comment: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Dominic',
    lastName: 'Toretto',
    description:
      'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
    car: {
      id: 2,
      model: 'R/T',
      make: 'Dodge Charger',
      color: 'preto',
      year: 1970,
      description: 'modificado',
    },
    options: {
      id: 2,
      ratePerKm: 500,
      minimumKm: 5,
    },
    rates: [
      {
        id: 2,
        rate: 4,
        comment:
          'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
      },
    ],
  },
  {
    id: 3,
    firstName: 'James',
    lastName: 'Bond',
    description:
      'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
    car: {
      id: 3,
      model: 'Aston',
      make: 'Martin DB5',
      color: 'preto',
      year: 1990,
      description: 'clássico',
    },
    options: {
      id: 3,
      ratePerKm: 1000,
      minimumKm: 10,
    },
    rates: [
      {
        id: 3,
        rate: 5,
        comment:
          'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
      },
    ],
  },
];

const driverSeed = async () => {
  for (const element of drivers) {
    await prisma.driver.upsert({
      where: { id: element.id },
      update: {},
      create: {
        id: element.id,
        firstName: element.firstName,
        lastName: element.lastName,
        description: element.description,
      },
    });

    await Promise.all([
      prisma.car.upsert({
        where: { id: element.car.id },
        update: {},
        create: {
          id: element.car.id,
          model: element.car.model,
          make: element.car.make,
          color: element.car.color,
          year: element.car.year,
          description: element.car.description,
          driverId: element.id,
        },
      }),
      prisma.optionDriver.upsert({
        where: { id: element.options.id },
        update: {},
        create: {
          id: element.options.id,
          ratePerKm: element.options.ratePerKm,
          minimumKm: element.options.minimumKm,
          driverId: element.id,
        },
      }),
    ]);

    for (const rate of element.rates) {
      await prisma.rating.upsert({
        where: { id: rate.id },
        update: {},
        create: {
          id: rate.id,
          rate: rate.rate,
          comment: rate.comment,
          driverId: element.id,
        },
      });
    }
  }
};

driverSeed().catch(e => {
  console.log(e);

  process.exit(1);
});
