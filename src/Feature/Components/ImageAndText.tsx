import { styled } from '@glitz/react';
import Forrest from '../../Assets/forrest.jpg';
import { media } from '@glitz/core';
import H2 from '../../Shared/Generic/H2';
import H3 from '../../Shared/Generic/H3';
import { Block, medium } from '../../Shared/value';
import LazyLoadImage from './Image';

function TextAndImage() {
  return (
    <Container className="container">
      <ImageContainer className="image">
        <Image src={Forrest} alt="oak image" />
      </ImageContainer>
      <TextContainer className="text">
        <H2>Våra Tjänster</H2>
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
});

const ImageContainer = styled.div({
  width: '100%',
  height: '100%',
  borderRadius: '5px',
});

const Image = styled(LazyLoadImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
