import { useRide } from '@/hooks/useRide';
import { CustomHttpError } from '@/services/errors/custom-http.erros';
import { getRidesByCustomer } from '@/services/getRidesbyCustomer.service';
import '@/styles/formHistory.css';
import { useState } from 'react';
import Button from './button';
import Input from './input';
import Select from './select';

export default function FormHistory() {
  const [valueInput, setValueInput] = useState('');
  const [valueSelect, setValueSelect] = useState(0);
  const [messageError, setMessageError] = useState('');
  const { setRidesDone } = useRide();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(valueInput, valueSelect);

    if (!valueInput) {
      setMessageError('O id do cliente precisa ser preenchido');
      return;
    }
    setMessageError('');

    try {
      const { data } = await getRidesByCustomer({
        customerId: valueInput,
        driverId: valueSelect,
      });

      setRidesDone(data.rides);
    } catch (error) {
      const _error = error as CustomHttpError;
      setMessageError(_error.message);
    }
  };

  return (
    <form className="form-history" onSubmit={e => handleSubmit(e)}>
      <div className="fields">
        <Input placeholder="Id do cliente" onChange={e => setValueInput(e.target.value)} />
        <Select onChange={value => setValueSelect(value)} />
      </div>
      <Button type="submit" className="button-submit">
        Buscar
      </Button>
      {messageError && <p className="message-error">{messageError}</p>}
    </form>
  );
}
