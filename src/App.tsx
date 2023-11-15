import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Location from './pages/Location/Location';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:locationName" element={<Location />} />
      </Routes>
    </Router>
    </QueryClientProvider>
  );
};

export default App;