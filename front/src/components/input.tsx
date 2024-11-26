import '@/styles/input.css';

interface InputProps {
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, onChange }: InputProps) {
  return (
    <input className="input" type="text" placeholder={placeholder} onChange={e => onChange(e)} />
  );
}
