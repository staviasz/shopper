import { DbClient } from '../../db/prisma.helper';

const prisma = DbClient.connect();

const drivers = [
  {
    id: 'd57a65ed-38ab-4f44-9bc9-e41bd5881003',
    firstName: 'Homer',
    lastName: 'Simpson',
    description:
      'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
    car: {
      id: 'd57a65ed-38ab-4f44-9bc9-e41bd5881003',
      model: 'Plymouth',
      make: 'Valiant',
      color: 'rosa',
      year: 1973,
      description: 'e enferrujado',
    },
    options: {
      id: 'd57a65ed-38ab-4f44-9bc9-e41bd5881003',
      ratePerKm: 250,
      minimumKm: 1,
    },
    rates: [
      {
        id: 'd57a65ed-38ab-4f44-9bc9-e41bd5881003',
        rate: 2,
        comment: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
      },
    ],
  },
  {
    id: 'cfde712a-9224-484f-bade-cf1c5db415c6',
    firstName: 'Dominic',
    lastName: 'Toretto',
    description:
      'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.',
    car: {
      id: 'cfde712a-9224-484f-bade-cf1c5db415c6',
      model: 'R/T',
      make: 'Dodge Charger',
      color: 'preto',
      year: 1970,
      description: 'modificado',
    },
    options: {
      id: 'cfde712a-9224-484f-bade-cf1c5db415c6',
      ratePerKm: 500,
      minimumKm: 5,
    },
    rates: [
      {
        id: 'cfde712a-9224-484f-bade-cf1c5db415c6',
        rate: 4,
        comment:
          'Que viagem incrível! O carro é um show à parte e o motorista, apesar de ter uma cara de poucos amigos, foi super gente boa. Recomendo!',
      },
    ],
  },
  {
    id: '34647054-444e-4941-b18c-a9c1de814dc8',
    firstName: 'James',
    lastName: 'Bond',
    description:
      'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
    car: {
      id: '34647054-444e-4941-b18c-a9c1de814dc8',
      model: 'Aston',
      make: 'Martin DB5',
      color: 'preto',
      year: 1990,
      description: 'clássico',
    },
    options: {
      id: '34647054-444e-4941-b18c-a9c1de814dc8',
      ratePerKm: 1000,
      minimumKm: 10,
    },
    rates: [
      {
        id: '34647054-444e-4941-b18c-a9c1de814dc8',
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
        car: {
          create: {
            id: element.car.id,
            model: element.car.model,
            make: element.car.make,
            color: element.car.color,
            year: element.car.year,
            description: element.car.description,
          },
        },
        options: {
          create: {
            id: element.options.id,
            ratePerKm: element.options.ratePerKm,
            minimumKm: element.options.minimumKm,
          },
        },
        rates: {
          create: element.rates.map(rate => ({
            id: rate.id,
            rate: rate.rate,
            comment: rate.comment,
          })),
        },
      },
    });
  }
};

driverSeed().catch(e => {
  console.log(e);

  process.exit(1);
});
