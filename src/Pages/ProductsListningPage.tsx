import HeroLumber from '../Assets/HeroLumber.jpg';
import Hero from '../Feature/Components/Hero';
import TextList from '../Feature/Components/TextList';
import ImageAndText from '../Feature/Components/ImageAndText';
import Limfog from '../Assets/products/limfog-alm.jpg';
import { styled } from '@glitz/react';
import TextContainer from '../Feature/Components/TextContainer';
import ProductInfoCol from '../Feature/Components/ProductInfoCol';

function ProductListningPage() {
  return (
    <>
      <Hero
        src={HeroLumber}
        alt="Hero image oak"
        title="Produkter"
        description="Kontakt oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <TextList />
      <ProductInfoCol
        col1={
          <TextContainer title="Okantat Möbelvirke">
            <Text>Vi lagerför okantat/kantat virke i ett flertal träslag.</Text>
            <Text>Dimensionerna skiljer sig mellan träslagen, men standard är i m.m 19, 25, 32, 50, 75.</Text>
            <Text>Längd: 3 m som standard men Ek finns i längderna från 1.8-4,3 m.</Text>
            <Text>Virket kan torkas ner till 7 % (möbeltorrt</Text>
          </TextContainer>
        }
        col2={
          <TextContainer title="Ämnestillverkning">
            <Text>Vi kan leverera torkade, hyvlade och längdkapade ämnen i svenskt lövträ.</Text>
            <Text>Sönderdelning i lamellsåg till exakta mått helt efter önskemål.</Text>
            <Text>Även strips för vidareförädling.</Text>
          </TextContainer>
        }
        col3={
          <TextContainer title="Hyvlade produkter">
            <Text>Med det nya hyvleriet kommer vi nu längre i förädlingsledet.</Text>
            <Text>Vi hanterar nu råvaran från stock till t,ex ett färdigt golv med tillhörande lister.</Text>
            <Text>För att få ett smakprov använd knapparna till vänster för att ta dig till de olika produkterna.</Text>
          </TextContainer>
        }
      />
      <ImageAndText src={Limfog} title="Limfog">
        <Text>
          Vi erbjuder Limfog till av mycket hög kvalitet som tillverkas i Sverige av virke som vi själva levererar.
        </Text>
        <Text>Hyllplan, bordsskivor och bänkskivor eller vad du själv önskar.</Text>
        <Text>Limfogen tillverkas i exakt de mått du önskar och är färdigputsade.</Text>
        <Text>Kan även levereras med ytbehandling</Text>
        <Text>Limfogen måste beställas, leveranstid 1-2 veckor.</Text>
        <Text>Bildexempel på bänkskiva i stavlimmad 40 m.m Alm</Text>
      </ImageAndText>
    </>
  );
}

export default ProductListningPage;

const Text = styled.p({});
