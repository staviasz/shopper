import '@/styles/listRides.css';
import { RideDone } from '@/types/ride.type';
import CardRide from './cardRide';

interface ListRidesProps {
  rides: RideDone[];
}
export default function ListHistory({ rides }: ListRidesProps) {
  return (
    <ul className="list-rides">
      {rides.length > 0 ? (
        rides.map(item => (
          <li>
            <CardRide ride={item} />
          </li>
        ))
      ) : (
        <li className="no-itens">Nenhuma viagem encontrada </li>
      )}
    </ul>
  );
}
