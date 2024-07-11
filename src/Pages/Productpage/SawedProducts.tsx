import Hero from '../../Feature/Components/Hero';
import Sawedimage from '../../Assets/sawed-products-1.jpg';
import SawedProductimage from '../../Assets/sawed-products-2.jpg';
import ImageAndText from '../../Feature/Components/ImageAndText';
import { Text } from '../../Shared/value';
import SmallList from '../../Feature/Components/SmallList';

function SawedProducts() {
  return (
    <>
      <Hero
        src={Sawedimage}
        alt="Hero image sågade produkter."
        title="Sågade produkter."
        description="Vi erbjuder sågat lövträ av de flesta svenska träslag och i de flesta dimensioner."
      />
      <ImageAndText src={SawedProductimage} title="Sågade produkter">
        <Text>Vi lagerför okantat/kantat virke i ett flertal träslag.</Text>
        <Text>Dimensionerna skiljer sig mellan träslagen, men standard är i m.m 19, 25, 32, 50, 75.</Text>
        <Text>Längd: 3 m som standard men Ek finns i längderna från 1.8-4,3 m.</Text>
        <Text>Virket kan torkas ner till 7 % (möbeltorrt).</Text>
      </ImageAndText>
      <SmallList />
    </>
  );
}

export default SawedProducts;
