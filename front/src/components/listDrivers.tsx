import CardDriver from '@/components/cardDriver';
import '@/styles/listDrivers.css';
import { Driver } from '@/types/driver.type';

interface ListDriversProps {
  drivers: Driver[];
}

export function ListDrivers({ drivers }: ListDriversProps) {
  return (
    <ul className="list-drivers">
      {drivers.map(driver => (
        <CardDriver key={driver.id} driver={driver} />
      ))}
    </ul>
  );
}