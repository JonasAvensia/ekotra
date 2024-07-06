import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import PriceListPage from '../Pages/PriceListPage';
import ProductsListningPage from '../Pages/ProductsListningPage';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prislista" element={<PriceListPage />} />
      <Route path="/produkter" element={<ProductsListningPage />} />
    </Routes>
  );
}

export default Routing;
