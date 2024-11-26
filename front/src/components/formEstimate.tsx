import emoji from '@/assets/emoji.svg';
import Input from '@/components/input';
import { useRide } from '@/hooks/useRide';
import { getDriverOptions } from '@/services/getDriversOptions.service';
import '@/styles/formEstimate.css';
import { useEffect, useState } from 'react';
import Button from './button';

export default function FormEstimate() {
  const { setEstimateRide, estimateRide, setPage } = useRide();
  const [customerId, setCustomerId] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [messageError, setMessageError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!customerId || !origin || !destination) {
      setMessageError('Preencha todos os campos');
      return;
    } else {
      setMessageError('');
    }

    try {
      setLoading(true);
      const { data } = await getDriverOptions({ customerId, origin, destination });
      setEstimateRide({
        customerId,
        origin,
        destination,
        duration: data.duration,
        distance: data.distance,
        options: data.options,
        polyline: data.routeResponse.routes[0].polyline.encodedPolyline,
      });

      setPage('optionsDriver');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessageError(
        `Verifique os dados e tente novamente, O Id do cliente precisa ser preenchido, 
        a origem e o destino devem estar preenchidos(Use endereços válidos Ex: Rua, Cidade, Estado)`,
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log(estimateRide);
  }, [estimateRide]);

  return (
    <form className="form-estimate" onSubmit={handleSubmit}>
      <h1 className="title">
        Para onde vamos <img className="emoji" src={emoji} />
      </h1>
      <Input placeholder="Id do cliente" onChange={e => setCustomerId(e.target.value)} />
      <Input placeholder="Origem" onChange={e => setOrigin(e.target.value)} />
      <Input placeholder="Destino" onChange={e => setDestination(e.target.value)} />
      <div className="buttons-container">
        <Button className="buttonSubmit" type="submit">
          {loading ? 'Estimando...' : 'Estimar'}
        </Button>
        <a className="link" onClick={() => setPage('historyRides')}>
          Histórico de viagens -&gt;
        </a>
      </div>
      {messageError && <p className="message-error">{messageError}</p>}
    </form>
  );
}
