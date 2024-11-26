import '@/styles/cardRide.css';
import { RideDone } from '@/types/ride.type';
import destinationIcon from '../assets/destino.png';
import driverIcon from '../assets/dirigindo.png';
import originIcon from '../assets/origem.png';

interface CardRideProps {
  ride: RideDone;
}

export default function CardRide({ ride }: CardRideProps) {
  const date = new Date(ride.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const hour = date.getHours();
  const minute = date.getMinutes();
  const formattedTime = `${hour}:${minute}`;

  return (
    <article className="card-ride">
      <div className="container-address-date">
        <p className="paragraph">
          {formattedDate} {formattedTime}
        </p>
        <p className="paragraph paragraph-icon">
          <img className="icon" src={originIcon} /> {ride.origin}
        </p>
        <p className="paragraph paragraph-icon">
          <img className="icon" src={destinationIcon} /> {ride.destination}
        </p>
      </div>

      <div className="container-driver-ride">
        <p className="paragraph paragraph-icon">
          <img className="icon" src={driverIcon} /> {ride.driver.name}
        </p>
        <p className="paragraph">
          {(ride.distance / 1000).toFixed(0)}Km {ride.duration}
        </p>
        <p className="paragraph">R$ {ride.value}</p>
      </div>
    </article>
  );
}
