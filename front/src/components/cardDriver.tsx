import vehicleIcon from '@/assets/modelo-de-carro-sedan.png';
import { useRide } from '@/hooks/useRide';
import { confirmRide } from '@/services/confirmRide.service';
import '@/styles/cardDriver.css';
import { Driver } from '@/types/driver.type';
import Button from './button';

interface CardDriverProps {
  driver: Driver;
}

export default function CardDriver({ driver }: CardDriverProps) {
  const { name, description, vehicle, review, value } = driver;
  const { setEstimateRide, estimateRide, setPage } = useRide();

  const handleSelectDriver = async () => {
    try {
      await confirmRide({
        customerId: estimateRide!.customerId,
        origin: estimateRide!.origin,
        destination: estimateRide!.destination,
        driver: {
          id: driver.id,
          name: driver.name,
        },
        distance: estimateRide!.distance,
        duration: estimateRide!.duration,
        value: driver.value,
      });
      setEstimateRide(null);
      setPage('historyRides');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="card-driver">
      <h1 className="name">{name}</h1>
      <p>{description}</p>
      <p className="vehicle">
        <img className="vehicle-icon" src={vehicleIcon} />
        {vehicle}
      </p>
      <p className="price">R$ {value.toFixed(2)}</p>
      <div className="review-and-select-container">
        <div className="review">
          <p className="rate">
            <span>Última avaliação:</span> {review.rating}
          </p>
          <p className="comment">{review.comment}</p>
        </div>
        <Button type="button" className="select-driver" onclick={handleSelectDriver}>
          Escolher
        </Button>
      </div>
    </article>
  );
}
