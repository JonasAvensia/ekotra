import Hero from '../Feature/Components/Hero';
import ImageAndText from '../Feature/Components/ImageAndText';
import TextList from '../Feature/Components/TextList';
import Forrest from '../Assets/forrest.jpg';
import oak from '../Assets/oak-boards.jpg';
import Emil from '../Assets/emil.jpg';
import Party from '../Assets/party.jpg';
import { styled } from '@glitz/react';
import H3 from '../Shared/Generic/H3';

function HomePage() {
  return (
    <>
      <Hero
        src={Party}
        alt="Hero image oak"
        title="Om oss"
        description="Specialsågverk-Hyvleri mitt i Småland sedan 1997"
      />

      <ImageAndText src={Emil} title="Store Emil">
        <H3>Jag fick en gädda i sikanätet</H3>
        <styled.P>Jag heter Emil....</styled.P>
        <styled.P></styled.P>
      </ImageAndText>
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
          Genom att kunna förädla svensk lövträråvara från stock till färdiga produkter kan vi gentemot dig som kund
          garantera materialets ursprung.
        </Text>
        <Text>Vi blir genom vår småskalighet flexibla och kan alltid sätta dig och dina önskemål i centrum.</Text>
      </ImageAndText>
    </>
  );
}

export default HomePage;

const Text = styled.p();
