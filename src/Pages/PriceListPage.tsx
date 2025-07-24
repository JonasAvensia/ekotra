import Hero from '../Feature/Components/Hero';
import PriceList from '../Feature/Components/PriceList';
import HeroLumber from '../Assets/HeroLumber.jpg';
import ImageAndText from '../Feature/Components/ImageAndText';
import H3 from '../Shared/Generic/H3';
import { styled } from '@glitz/react';
import Shipping from '../Assets/shipping.png';

function PriceListPage() {
  return (
    <>
      <Hero
        src={HeroLumber}
        alt="Hero image oak"
        title="Prislista"
        description="Kontakta oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <PriceList />
      <ImageAndText src={Shipping} title="Frakt" textFirst>
        <H3>Vi har ett avtal med DHL som levererar virket direkt till dörren över hela Sverige.</H3>
        <styled.P>Fraktkostnaden till Stockholm ligger på cirka 600-1200 kronor inklusive moms.</styled.P>
        <styled.P>
          Om möjligt rekommenderar vi att du hämtar virket själv. Då får du en inblick i produktionsprocessen och kan
          följa hur din panel tillverkas, från stock till färdig panel.
        </styled.P>
      </ImageAndText>
    </>
  );
}

export default PriceListPage;
