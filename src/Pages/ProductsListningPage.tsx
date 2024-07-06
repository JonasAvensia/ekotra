import LazyLoadImage from '../Feature/Components/LazyLoadImage';
import useProductsList from '../Lists/Products';
import HeroLumber from '../Assets/HeroLumber.jpg';
import Hero from '../Feature/Components/Hero';
import List from '../Feature/Components/Lits';

function ProductListningPage() {
  const { products } = useProductsList();

  return (
    <>
      <Hero
        src={HeroLumber}
        alt="Hero image oak"
        title="Produkter"
        description="Kontakt oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <List
        title="Våra Projekt i Verkligheten"
        description="Upptäck våra kunders imponerande projekt med våra material"
        list={products}
      />
    </>
  );
}

export default ProductListningPage;
