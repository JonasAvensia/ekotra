import LazyLoadImage from '../Feature/Components/LazyLoadImage';
import useProductsList from '../Lists/Products';
import HeroLumber from '../Assets/HeroLumber.jpg';
import Hero from '../Feature/Components/Hero';
import List from '../Feature/Components/Lits';
import TextList from '../Feature/Components/TextList';
import ImageAndText from '../Feature/Components/ImageAndText';
import Limfog from '../Assets/products/limfog-alm.jpg';
import { styled } from '@glitz/react';
import ContactLinkBlock from '../Feature/Components/ContactLinkBlock';

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
      <TextList />
      <ImageAndText src={Limfog} title="Limfog">
        <Text>
          Vi erbjuder Limfog till av mycket hög kvalitet som tillverkas i Sverige av virke som vi själva levererar.
        </Text>
        <Text>Hyllplan, bordsskivor och bänkskivor eller vad du själv önskar.</Text>
        <Text>Limfogen tillverkas i exakt de mått du önskar och är färdigputsade.</Text>
        <Text>Kan även levereras med ytbehandling</Text>
        <Text>Limfogen måste beställas, leveranstid 1-2 veckor.</Text>
        <Text>Nedan exempel på bänkskiva i stavlimmad 40 m.m Alm</Text>
      </ImageAndText>
      <List
        title="Våra Projekt i Verkligheten"
        description="Upptäck våra kunders imponerande projekt med våra material"
        list={products}
      />
    </>
  );
}

export default ProductListningPage;

const Text = styled.p({});
