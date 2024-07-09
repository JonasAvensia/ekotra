import { styled } from '@glitz/react';
import H1 from '../../Shared/Generic/H1';
import { huge, medium } from '../../Shared/value';
import H3 from '../../Shared/Generic/H3';
import LazyLoadImage from './LazyLoadImage';
import Button from './Button';
import { media } from '@glitz/core';
interface HeroProps {
  src: string;
  alt: string;
  title: string;
  description?: string;
}

function Hero(props: HeroProps) {
  return (
    <HeroContainer>
      <TextOverlay>
        <TextContainer>
          <H1>{props.title}</H1>
          <StyledH3>{props.description}</StyledH3>
        </TextContainer>
        <StyledButton arialLabel="kontakta oss" to="/kontakt">
          Kontakta oss
        </StyledButton>
      </TextOverlay>
      <ImageContainer>
        <Image src={props.src} alt={props.alt} />
      </ImageContainer>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div({
  position: 'relative',
  overflow: 'hidden',
});

const TextContainer = styled.div();

const TextOverlay = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  flexWrap: 'wrap',
  padding: { x: medium, bottom: huge },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
  textAlign: 'left',
  color: '#fff',
  width: '100%',
  height: '100%',
  backgroundImage:
    'linear-gradient(185.28deg,transparent,rgba(0,0,0,.05) 57.61%,rgba(0,0,0,.9) 99.95%,rgba(0,0,0,.5) 100%,rgba(0,0,0,.5) 0),linear-gradient(180.33deg,transparent,transparent 55.61%,rgba(0,0,0,.9) 99.95%,rgba(0,0,0,.5) 100%,rgba(0,0,0,.5) 0)',
  ...media(
    { maxWidth: '1025px' },
    {
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'end',
      padding: { x: medium, bottom: medium },
    },
  ),
});

const StyledButton = styled(Button, {
  backgroundColor: '#fff',
  color: 'black',
  ':hover': {
    backgroundColor: '#f0f0f0 ',
  },
  ...media(
    { maxWidth: '1025px' },
    {
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'end',
      margin: { top: medium },
    },
  ),
});

const StyledH3 = styled(H3, {
  fontStyle: 'italic',
});

const ImageContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '400px', // Adjust height as needed
  overflow: 'hidden',
});

const Image = styled(LazyLoadImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
