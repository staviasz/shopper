import '@/styles/cardRide.css';
import destinationIcon from '../assets/destino.png';
import driverIcon from '../assets/dirigindo.png';
import originIcon from '../assets/origem.png';

export default function CardRide() {
  return (
    <article className="card-ride">
      <div className="container-address-date">
        <p className="paragraph">data</p>
        <p className="paragraph paragraph-icon">
          <img className="icon" src={originIcon} /> origem
        </p>
        <p className="paragraph paragraph-icon">
          <img className="icon" src={destinationIcon} /> destino
        </p>
      </div>

      <div className="container-driver-ride">
        <p className="paragraph paragraph-icon">
          <img className="icon" src={driverIcon} /> driver name
        </p>
        <p className="paragraph">distance duration</p>
        <p className="paragraph">R$ value</p>
      </div>
    </article>
  );
}
