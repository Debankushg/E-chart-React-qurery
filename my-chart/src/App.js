
import './App.css';
import Chart from './Chart';
import Posting from './Posting';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      {/* <Chart/> */}
    <Posting/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
