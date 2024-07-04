import { styled } from '@glitz/react';
import oak from '../../Assets/oak-boards.jpg';
import { media } from '@glitz/core';
import H2 from '../../Shared/Generic/H2';
import H3 from '../../Shared/Generic/H3';
import { Block, medium } from '../../Shared/value';
import LazyLoadImage from './Image';

function TextAndImage() {
  return (
    <Container className="container">
      <TextContainer>
        <H2>Vår Vision</H2>
        <ul>
          <li>
            <H3>
              Genom att varsamt och för hand hantera virket från sågning till färdig produkt kan vi säkerställa en god
              kvalitet och ett formstabilt virke.
            </H3>
          </li>
          <li>
            <H3>Vi arbetar nästan uteslutande med svenskt lövträ och sätter ursprung i fokus.</H3>
          </li>
          <li>
            <H3>Med leverans följer ett ursprungsdokument med växtplats.</H3>
          </li>
          <li>
            <H3>Udda längder, dimensioner och profiler tillhör vår specialitet.</H3>
          </li>
          <li>
            <H3>
              Vi har som mål att kunna leverera inom två veckor från order, oavsett om det är lagervara eller måste
              specialproduceras.
            </H3>
          </li>
        </ul>
      </TextContainer>
      <ImageContainer className="image">
        <Image src={oak} alt="oak image" />
      </ImageContainer>
    </Container>
  );
}
export default TextAndImage;

const Container = styled(Block, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  padding: { x: medium },
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr',
    },
  ),
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: { xy: medium },
  order: 1,
  ...media(
    { maxWidth: '1025px' },
    {
      order: 2,
    },
  ),
});

const ImageContainer = styled.div({
  width: '100%',
  height: '100%',
  borderRadius: '5px',
  order: 2,
  ...media(
    { maxWidth: '1025px' },
    {
      order: 1,
    },
  ),
});

const Image = styled(LazyLoadImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
