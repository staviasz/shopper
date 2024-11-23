import { ListDrivers } from '@/components/listDrivers';
import RouteMapImg from '@/components/routeMapImg';
import '@/styles/optionsDrivers.css';
import { Driver } from '@/types/driver.type';
const drivers: Driver[] = [
  {
    id: 1,
    name: 'Homer Simpson',
    description:
      'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).',
    vehicle: 'Plymouth Valiant 1973 rosa enferrujado',
    review: {
      rating: 2,
      comment: 'Motorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.',
    },
    value: 10,
  },
  {
    id: 2,
    name: 'James Bond',
    description:
      'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.',
    vehicle: 'Aston Martin DB5 1990 preto clássico',
    review: {
      rating: 5,
      comment:
        'Serviço impecável! O motorista é a própria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.',
    },
    value: 10,
  },
  {
    id: 3,
    name: 'Dominic Toretto',
    description:
      'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada',
    vehicle: 'Dodge Charger R/T 1970 modificado',
    review: {
      rating: 4,
      comment:
        'Motorista profissional, qualidade de servico e carro impecável. Um verdadeiro agente secreto de alto nivel.',
    },
    value: 10,
  },
];
export default function OptionsDriver() {
  return (
    <section className="options-drivers">
      <RouteMapImg />
      <ListDrivers drivers={drivers} />
    </section>
  );
}
