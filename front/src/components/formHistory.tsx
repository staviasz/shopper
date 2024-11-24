import '@/styles/formHistory.css';
import Button from './button';
import Input from './input';
import Select from './select';

export default function FormHistory() {
  return (
    <form className="form-history">
      <div className="fields">
        <Input placeholder="Id do cliente" />
        <Select />
      </div>
      <Button type="submit" className="button-submit">
        Buscar
      </Button>
    </form>
  );
}
