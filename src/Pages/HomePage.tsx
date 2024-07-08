import CardLinks from '../Feature/Components/CardLinks';
import Hero from '../Feature/Components/Hero';
import ImageAndText from '../Feature/Components/ImageAndText';
import AcornHero from '../Assets/acorn.jpg';
import TextList from '../Feature/Components/TextList';
import H3 from '../Shared/Generic/H3';
import Forrest from '../Assets/forrest.jpg';
import oak from '../Assets/oak-boards.jpg';
function HomePage() {
  return (
    <>
      <Hero
        src={AcornHero}
        alt="Hero image oak"
        title="Välkommen till EKOTRÄ AB."
        description="Specialsågverk-Hyvleri mitt i Småland sedan 1997"
      />
      <TextList />
      <CardLinks />
      <ImageAndText src={oak} title="Vår Vision" textFirst>
        <H3>
          Genom att varsamt och för hand hantera virket från sågning till färdig produkt kan vi säkerställa en god
          kvalitet och ett formstabilt virke.
        </H3>
        <H3>Vi arbetar nästan uteslutande med svenskt lövträ och sätter ursprung i fokus.</H3>
        <H3>Med leverans följer ett ursprungsdokument med växtplats.</H3>
        <H3>Udda längder, dimensioner och profiler tillhör vår specialitet.</H3>
        <H3>
          Vi har som mål att kunna leverera inom två veckor från order, oavsett om det är lagervara eller måste
          specialproduceras.
        </H3>
      </ImageAndText>
      <ImageAndText src={Forrest} title="Våra Mål">
        <H3>Vi jobbar mot privata kunder, kommuner, länsstyrelser och andra företag.</H3>

        <H3>Alltid med samma mål, att kunden ska få rätt vara vid rätt tid.</H3>

        <H3>Vi ombesörjer transport inom hela Sverige.</H3>
      </ImageAndText>
    </>
  );
}

export default HomePage;
