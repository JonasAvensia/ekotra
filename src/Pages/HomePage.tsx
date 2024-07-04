import CardLinks from '../Feature/Components/CardLinks';
import Hero from '../Feature/Components/Hero';
import ImageAndText from '../Feature/Components/ImageAndText';
import TextAndImage from '../Feature/Components/TextAndImage';
import AcornHero from '../Assets/acorn.jpg';

function HomePage() {
  return (
    <>
      <Hero
        src={AcornHero}
        alt="Hero image oak"
        title="Välkommen till EKOTRÄ AB."
        description="Specialsågverk-Hyvleri mitt i Småland sedan 1997"
      />
      <CardLinks />
      <TextAndImage />
      <ImageAndText />
    </>
  );
}

export default HomePage;
