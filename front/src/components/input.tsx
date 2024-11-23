import '@/styles/input.css';

interface InputProps {
  placeholder?: string;
}

export default function Input({ placeholder }: InputProps) {
  return <input className="input" type="text" placeholder={placeholder} />;
}
