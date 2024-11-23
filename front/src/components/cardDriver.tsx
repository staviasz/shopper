import vehicleIcon from '@/assets/modelo-de-carro-sedan.png';
import '@/styles/cardDriver.css';
import { Driver } from '@/types/driver.type';
import Button from './button';

interface CardDriverProps {
  driver: Driver;
}

export default function CardDriver({ driver }: CardDriverProps) {
  const { name, description, vehicle, review, value } = driver;
  return (
    <article className="card-driver">
      <h1 className="name">{name}</h1>
      <p>{description}</p>
      <p className="vehicle">
        <img className="vehicle-icon" src={vehicleIcon} />
        {vehicle}
      </p>
      <p className="price">R$ {value}</p>
      <div className="review-and-select-container">
        <div className="review">
          <p className="rate">Ultima avaliação: {review.rating}</p>
          <p className="comment">{review.comment}</p>
        </div>
        <Button type="button" className="select-driver">
          Escolher
        </Button>
      </div>
    </article>
  );
}
