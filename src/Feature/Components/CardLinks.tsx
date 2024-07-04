import { styled } from '@glitz/react';
import { media } from '@glitz/core';
import { Block, DefaultGreen, large, medium, small } from '../../Shared/value';
import { Link } from 'react-router-dom';
import woodDummy from '../../Assets/wood-dummy.jpg';
import H3 from '../../Shared/Generic/H3';
import Button from './Button';
import LazyLoadImage from './Image';

function CardLinks() {
  return (
    <Container>
      <Column>
        <Link to="">
          <StyledImage src={woodDummy} alt="dummy" />
        </Link>
        <TextContainer>
          <H3>Sågade produkter</H3>
          <Text>Vi erbjuder sågat lövträ av de flesta svenska träslag och i de flesta dimensioner.</Text>
          <Link to="">
            <ButtonContainer>
              <StyledButton to="/">Läs mer</StyledButton>
            </ButtonContainer>
          </Link>
        </TextContainer>
      </Column>
      <Column>
        <Link to="">
          <StyledImage src={woodDummy} alt="dummy" />
        </Link>
        <TextContainer>
          <H3>Sågade produkter</H3>
          <Text>Vi erbjuder sågat lövträ av de flesta svenska träslag och i de flesta dimensioner.</Text>
          <Link to="">
            <ButtonContainer>
              <StyledButton to="/">Läs mer</StyledButton>
            </ButtonContainer>
          </Link>
        </TextContainer>
      </Column>
      <Column>
        <Link to="">
          <StyledImage src={woodDummy} alt="dummy" />
        </Link>
        <TextContainer>
          <H3>Sågade produkter</H3>
          <Text>Vi erbjuder sågat lövträ av de flesta svenska träslag och i de flesta dimensioner.</Text>
          <Link to="">
            <ButtonContainer>
              <StyledButton to="/">Läs mer</StyledButton>
            </ButtonContainer>
          </Link>
        </TextContainer>
      </Column>
    </Container>
  );
}

export default CardLinks;

const Container = styled(Block, {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  ),
});

const Column = styled.div({
  width: '100%',
  backgroundColor: '#fff',
  padding: { xy: medium },
});

const StyledImage = styled(LazyLoadImage, {
  width: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: { y: small },
});

const Text = styled.span({
  margin: {
    top: small,
  },
});

const ButtonContainer = styled.div({
  width: '100%',
  textAlign: 'left',
  margin: {
    top: large,
  },
});

const StyledButton = styled(Button, {
  width: '100%',
});
