import FormHistory from '@/components/formHistory';
import ListHistory from '@/components/listRides';
import { useRide } from '@/hooks/useRide';
import '@/styles/historyRides.css';

export default function HistoryRides() {
  const { ridesDone } = useRide();
  return (
    <section className="history-rides">
      <FormHistory />
      <ListHistory rides={ridesDone} />
    </section>
  );
}
