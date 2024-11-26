import { useRide } from '@/hooks/useRide';
import '@/styles/listDrivers.css';
import CardDriver from './cardDriver';

export function ListDrivers() {
  const { estimateRide } = useRide();
  return (
    <ul className="list-drivers">
      {estimateRide ? (
        estimateRide.options.map(driver => (
          <li>
            <CardDriver key={driver.id} driver={driver} />
          </li>
        ))
      ) : (
        <li className="no-itens">Nenhum motorista encontrado </li>
      )}
    </ul>
  );
}
