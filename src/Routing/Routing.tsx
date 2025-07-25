import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import ScrollToTop from '../Feature/Helper/ScrollToTop';

const HomePage = lazy(() => import('../Pages/HomePage'));
const PriceListPage = lazy(() => import('../Pages/PriceListPage'));
const ProductsListningPage = lazy(() => import('../Pages/ProductsListningPage'));
const ContactPage = lazy(() => import('../Pages/ContactPage'));
const ImageArchive = lazy(() => import('../Pages/ImageArchive'));
const SawedProducts = lazy(() => import('../Pages/Productpage/SawedProducts'));
const SpecialProducts = lazy(() => import('../Pages/Productpage/SpecialProducts'));
const Limfog = lazy(() => import('../Pages/Productpage/Limfog'));
const PlanedProducts = lazy(() => import('../Pages/Productpage/PlanedProducts'));
const AboutusPage = lazy(() => import('../Pages/AboutUsPage'));

function Routing() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/prislista" element={<PriceListPage />} />
          <Route path="/produkter" element={<ProductsListningPage />} />
          <Route path="/produkter/limfog" element={<Limfog />} />
          <Route path="/produkter/sagade-produkter" element={<SawedProducts />} />
          <Route path="/produkter/special-produkter" element={<SpecialProducts />} />
          <Route path="/produkter/hyvlade-produkter" element={<PlanedProducts />} />
          <Route path="/galleri" element={<ImageArchive />} />
          <Route path="/om-oss" element={<AboutusPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default Routing;
