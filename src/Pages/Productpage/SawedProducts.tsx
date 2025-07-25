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
        description="Vi erbjuder svenskt lövträ i sågat format – i flera träslag och anpassade dimensioner."
      />
      <ImageAndText src={SawedProductimage} title="Okantat Möbelvirke">
        <Text>Vi lagerför både okantat och kantat virke i flera svenska träslag.</Text>
        <Text>Standardtjocklekar (mm): 19, 25, 32, 50 och 75 – beroende på träslag.</Text>
        <Text>Standardlängd är 3 meter, men ek finns i längder från 1,8 till 4,3 meter.</Text>
        <Text>Virket kan torkas ner till 7 % fukthalt – så kallat möbeltorrt.</Text>
      </ImageAndText>
      <ImageAndText src={SawedProductimage} title="Ämnestillverkning" textFirst>
        <Text>Vi kan leverera torkade, hyvlade och längdkapade ämnen i svenskt lövträ.</Text>
        <Text>Ämnen kan även sönderdelas i lamellsåg till exakt önskade mått.</Text>
        <Text>Vi tillhandahåller också strips för vidareförädling.</Text>
      </ImageAndText>
      <SmallList />
    </>
  );
}

export default SawedProducts;
