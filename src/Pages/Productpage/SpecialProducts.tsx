import Hero from '../../Feature/Components/Hero';
import HorseBox from '../../Assets/products/horse-box.jpg';
import ImageAndText from '../../Feature/Components/ImageAndText';
import { Text } from '../../Shared/value';
import SmallList from '../../Feature/Components/SmallList';

function SpecialProducts() {
  return (
    <>
      <Hero
        src={HorseBox}
        alt="Hero image Limfog."
        title="Specialprodukter"
        description="Vi kan erbjuda sågade varor i alla tänkbara och otänkbara dimensioner och längder"
      />
      <ImageAndText src={HorseBox} title="Hästbox">
        <Text>Bilden visar ett stall som vi levererat till i Nybro.</Text>
        <Text>Vi hyvlar fram ek till boxar och pelare i stall</Text>
        <Text>
          Eken är genom sitt hårda och röt tåliga virke ett träslag som lämpar sig mycket väl som stallinredning.
        </Text>
        <Text>Att det sedan ger stallet ett exklusivt intryck är bonus.</Text>
      </ImageAndText>
      <SmallList showType />
    </>
  );
}

export default SpecialProducts;
