import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import PriceListPage from '../Pages/PriceListPage';
import ProductsListningPage from '../Pages/ProductsListningPage';
import ContactPage from '../Pages/ContactPage';
import ImageArchive from '../Pages/ImageArchive';
import ScrollToTop from '../Feature/Helper/ScrollToTop';
import Limfog from '../Pages/Productpage/limfog';
import SawedProducts from '../Pages/Productpage/SawedProducts';

function Routing() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/prislista" element={<PriceListPage />} />
        <Route path="/produkter" element={<ProductsListningPage />} />
        <Route path="/produkter/limfog" element={<Limfog />} />
        <Route path="/produkter/sagade-produkter" element={<SawedProducts />} />
        <Route path="/galleri" element={<ImageArchive />} />
        <Route path="/kontakt" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default Routing;
