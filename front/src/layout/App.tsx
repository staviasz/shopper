import FormEstimate from '@/components/formEstimate';
import { useRide } from '@/hooks/useRide';
import HistoryRides from './historyRides';
import OptionsDriver from './optionsDriver';

function App() {
  const { page } = useRide();
  return (
    <>
      {page === 'formEstimate' && <FormEstimate />}
      {page === 'optionsDriver' && <OptionsDriver />}
      {page === 'historyRides' && <HistoryRides />}
    </>
  );
}

export default App;
