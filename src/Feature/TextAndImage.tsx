import { styled } from '@glitz/react';
import oak from '../Assets/oak-boards.jpg';
import H1 from '../Shared/Generic/H1';
import { Block, large } from '../Shared/value';
import { media } from '@glitz/core';
import H3 from '../Shared/Generic/H3';
import H2 from '../Shared/Generic/H2';

function TextAndImage() {
  return (
    <Container className="container">
      <TextContainer className="text">
        <H2>Vår Vision</H2>
        <ul>
          <li>
            <H3>Vi jobbar mot privata kunder, kommuner, länsstyrelser och andra företag.</H3>
          </li>
          <li>
            <H3>Alltid med samma mål, att kunden ska få rätt vara vid rätt tid.</H3>
          </li>
          <li>
            <H3>Vi ombesörjer transport inom hela Sverige.</H3>
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
  padding: { x: large },
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr',
    },
  ),
});

const TextContainer = styled.div({
  padding: { xy: large },
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

const Image = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
