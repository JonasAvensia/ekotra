import Hero from '../Feature/Components/Hero';
import Sign from '../Assets/sign.jpg';
import ImageAndText from '../Feature/Components/ImageAndText';
import H4 from '../Shared/Generic/H4';
import { styled } from '@glitz/react';
import H3 from '../Shared/Generic/H3';

function ContactPage() {
  return (
    <>
      <Hero
        src={Sign}
        alt="Hero image oak"
        title="Kontakta oss"
        description="Kontakt oss om ni vill ha Pris på sågat virke okant och kantat"
      />
      <ImageAndText src={Sign} title="Ekoträ" textFirst>
        <H4>Äpplaryd 3</H4>
        <H4>360 30 Lammhult</H4>
        <br />
        <H4>
          <A href="tel:070-3278734">070-3278734</A>
        </H4>
        <H4>
          <A href="mailto:info@eme.nu">info@eme.nu</A>
        </H4>
        <br />
        <H3>Öppettider</H3>
        <H4>Måndag - fredag 07.00-18.00</H4>
        <H4>Lördag - söndag 09.00-15.00</H4>
      </ImageAndText>
    </>
  );
}

const A = styled.a();

export default ContactPage;
