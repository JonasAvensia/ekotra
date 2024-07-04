import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import PriceListPage from '../Pages/PriceListPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prislista" element={<PriceListPage />} />
    </Routes>
  );
}

export default Routing;
