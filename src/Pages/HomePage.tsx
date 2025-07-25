import CardLinks from '../Feature/Components/CardLinks';
import Hero from '../Feature/Components/Hero';
import ImageAndText from '../Feature/Components/ImageAndText';
import AcornHero from '../Assets/acorn.jpg';
import TextList from '../Feature/Components/TextList';
import Forrest from '../Assets/forrest.jpg';
import oak from '../Assets/oak-boards.jpg';
import Shipping from '../Assets/shipping.png';
import { styled } from '@glitz/react';
import H3 from '../Shared/Generic/H3';
import H2 from '../Shared/Generic/H2';
import { Block } from '../Shared/value';

function HomePage() {
  return (
    <>
      <Hero
        src={AcornHero}
        alt="Hero image oak"
        title="Välkommen till EKOTRÄ AB."
        description="Specialsågverk och hyvleri mitt i Småland sedan 1997"
      />
      <Block>
        <H2>Svenskt lövträ, snabba leveranser, specialdimensioner.</H2>
      </Block>
      <CardLinks />
      <ImageAndText src={oak} title="Vår Vision" textFirst>
        <Text>
          Genom att varsamt och för hand hantera virket från sågning till färdig produkt kan vi säkerställa en
          <strong> god kvalitet</strong> och ett <strong> formstabilt virke</strong>.
        </Text>
        <Text>
          Vi arbetar nästan uteslutande med <strong>svenskt lövträ</strong> och sätter ursprung i fokus.
        </Text>
        <Text>Med leverans följer ett ursprungsdokument med växtplats.</Text>
        <Text>Udda längder, dimensioner och profiler tillhör vår specialitet.</Text>
        <Text>
          Vi har som mål att kunna leverera inom <strong>två veckor</strong> från order, oavsett om det är lagervara
          eller måste specialproduceras.
        </Text>
      </ImageAndText>
      <ImageAndText src={Forrest} title="Våra Mål">
        <Text>Vi jobbar mot privata kunder, kommuner, länsstyrelser och andra företag.</Text>
        <Text>Alltid med samma mål, att kunden ska få rätt vara vid rätt tid.</Text>
        <Text>Vi ombesörjer transport inom hela Sverige.</Text>
      </ImageAndText>
      <ImageAndText src={oak} title="Vårt uppdrag" textFirst>
        <Text>
          Genom att kunna förädla svensk lövträråvara från stock till färdiga produkter kan vi garantera materialets
          ursprung.
        </Text>
        <Text>Vår småskalighet gör oss flexibla, och vi kan alltid sätta dig och dina önskemål i centrum.</Text>
      </ImageAndText>
      <ImageAndText src={Shipping} title="Frakt">
        <H3>Vi har ett avtal med DHL som levererar virket direkt till dörren över hela Sverige.</H3>
        <styled.P>Fraktkostnaden till Stockholm ligger på cirka 600-1200 kronor inklusive moms.</styled.P>
        <styled.P>
          Om möjligt rekommenderar vi att du hämtar virket själv. Då får du en inblick i produktionsprocessen och kan
          följa hur ditt virke tillverkas, från stock till färdig produkt.
        </styled.P>
      </ImageAndText>
      <TextList />
    </>
  );
}

export default HomePage;

const Text = styled.p();
