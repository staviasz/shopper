import emoji from '@/assets/emoji.svg';
import Input from '@/components/input';
import '@/styles/formEstimate.css';
import Button from './button';

export default function FormEstimate() {
  return (
    <form className="form-estimate">
      <h1 className="title">
        Para onde vamos <img className="emoji" src={emoji} />
      </h1>
      <Input placeholder="Id do cliente" />
      <Input placeholder="Origem" />
      <Input placeholder="Destino" />
      <Button className="buttonSubmit" type="submit">
        Estimar
      </Button>
    </form>
  );
}
