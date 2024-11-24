import '@/styles/listRides.css';
import CardRide from './cardRide';

const array = [1, 2, 3, 2, 2, 2, 2, 3, 3, 3, 33, 3, 1, 2, 3, 2, 2, 2, 2, 3, 3, 3, 33, 3];
export default function ListHistory() {
  return (
    <ul className="list-rides">
      {array.map(item => (
        <li>
          <CardRide />
        </li>
      ))}
    </ul>
  );
}
