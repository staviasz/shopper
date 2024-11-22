import { Car, OptionsDriver, Rate } from '.';

export type Driver = {
  id?: string;
  firstName: string;
  lastName: string;
  description: string;
  car: Car;
  options: OptionsDriver;
  rates: Rate[];
};
