import Hero from '../Feature/Components/Hero';
import HeroLumber from '../Assets/HeroLumber.jpg';
import ImageAndText from '../Feature/Components/ImageAndText';
import H3 from '../Shared/Generic/H3';
function ContactPage() {
  return (
    <>
      <Hero
        src={HeroLumber}
        alt="Hero image oak"
        title="Kontakta oss"
        description="Kontakt oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <ImageAndText src={HeroLumber} title="Ekoträ" textFirst>
        <H3>Äpplaryd 3</H3>
        <H3>360 30 Lammhult</H3>
        <H3>070-3278734</H3>
      </ImageAndText>
    </>
  );
}

export default ContactPage;
