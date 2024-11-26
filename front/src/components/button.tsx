import '@/styles/button.css';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onclick?: () => void;
};
export default function Button({ children, type, className, onclick }: ButtonProps) {
  console.log(className);

  return (
    <button className={`${className} button`} type={type} onClick={onclick}>
      {children}
    </button>
  );
}
