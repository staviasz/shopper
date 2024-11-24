import FormHistory from '@/components/formHistory';
import ListHistory from '@/components/listRides';
import '@/styles/historyRides.css';

export default function HistoryRides() {
  return (
    <section className="history-rides">
      <FormHistory />
      <ListHistory />
    </section>
  );
}
