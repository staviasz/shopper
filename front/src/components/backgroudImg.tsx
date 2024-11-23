import '@/styles/backgroundImg.css';

interface BackgroundImgProps {
  children?: React.ReactNode;
}

export default function BackgroundImg({ children }: BackgroundImgProps) {
  return (
    <div className="background-img">
      <div className="after"></div>
      <main className="children">{children}</main>
    </div>
  );
}
