import '@/styles/button.css';

type ButtonProps = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
};
export default function Button({ children, type, className }: ButtonProps) {
  console.log(className);

  return (
    <button className={`${className} button`} type={type}>
      {children}
    </button>
  );
}
