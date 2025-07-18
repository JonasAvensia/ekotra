import { styled } from '@glitz/react';
import H1 from '../../Shared/Generic/H1';
import { Block, huge, large, medium } from '../../Shared/value';
import H3 from '../../Shared/Generic/H3';
import LazyLoadImage from './LazyLoadImage';
import Button from './Button';
import { media } from '@glitz/core';
import { memo } from 'react';
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
        <StyledButton ariaLabel="kontakta oss" to="/kontakt">
          Kontakta oss
        </StyledButton>
      </TextOverlay>
      <ImageContainer>
        <Image src={props.src} alt={props.alt} />
      </ImageContainer>
      <StyledBlock>
        <TextContainer>
          <H1>{props.title}</H1>
          <StyledH3>{props.description}</StyledH3>
        </TextContainer>
      </StyledBlock>
    </HeroContainer>
  );
}

export default memo(Hero);

const HeroContainer = styled.div({
  position: 'relative',
  overflow: 'hidden',
});

const TextContainer = styled.div();

const StyledBlock = styled(Block, {
  display: 'none',
  ...media(
    { maxWidth: '1025px' },
    {
      display: 'block',
    },
  ),
});

const TextOverlay = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  flexWrap: 'wrap',
  padding: { x: large, bottom: huge },
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
      display: 'none',
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
      margin: { top: medium, x: 0, bottom: 0 },
    },
  ),
});

const StyledH3 = styled(H3, {
  fontStyle: 'italic',
});

const ImageContainer = styled.div({
  position: 'relative',
  width: '100%',
  height: '500px',
  overflow: 'hidden',
  ...media(
    { maxWidth: '760px' },
    {
      height: '300px',
    },
  ),
});

const Image = styled(LazyLoadImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
