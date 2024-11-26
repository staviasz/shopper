import { ListDrivers } from '@/components/listDrivers';
import RouteMapImg from '@/components/routeMapImg';
import { useRide } from '@/hooks/useRide';
import '@/styles/optionsDrivers.css';

export default function OptionsDriver() {
  const { setPage } = useRide();
  return (
    <section className="options-drivers">
      <RouteMapImg />
      <ListDrivers />
      <a className="link" onClick={() => setPage('formEstimate')}>
        &lt;- Voltar
      </a>
    </section>
  );
}
