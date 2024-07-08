import Hero from '../Feature/Components/Hero';
import PriceList from '../Feature/Components/PriceList';
import HeroLumber from '../Assets/HeroLumber.jpg';
import ContactLinkBlock from '../Feature/Components/ContactLinkBlock';

function PriceListPage() {
  return (
    <>
      <Hero
        src={HeroLumber}
        alt="Hero image oak"
        title="Prislista"
        description="Kontakt oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <PriceList />
    </>
  );
}

export default PriceListPage;
