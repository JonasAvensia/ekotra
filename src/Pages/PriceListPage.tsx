import Hero from '../Feature/Components/Hero';
import PriceList from '../Feature/Components/PriceList';
import HeroLumber from '../Assets/HeroLumber.jpg';

function PriceListPage() {
  return (
    <>
      <Hero src={HeroLumber} alt="Hero image oak" title="Prislista" />
      <PriceList />
    </>
  );
}

export default PriceListPage;
