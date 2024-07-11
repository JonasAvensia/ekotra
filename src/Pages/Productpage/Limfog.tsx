import LimFogImage from '../../Assets/products/limfog-alm.jpg';
import ImageAndText from '../../Feature/Components/ImageAndText';
import { Text } from '../../Shared/value';

function Limfog() {
  return (
    <>
      <ImageAndText src={LimFogImage} title="Limfog">
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

export default Limfog;
