import { Car, OptionsDriver, Rate } from '@/modules/ride/types';

export type Driver = {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  Car: Car | null;
  OptionDriver: OptionsDriver | null;
  Rating: Rate[];
};
