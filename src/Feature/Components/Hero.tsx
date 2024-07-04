import { styled } from '@glitz/react';
import AcornHero from '../../Assets/acorn.jpg';
import H1 from '../../Shared/Generic/H1';
import { huge } from '../../Shared/value';
import H3 from '../../Shared/Generic/H3';
import LazyLoadImage from './Image';

function Hero() {
  return (
    <HeroContainer>
      <TextOverlay>
        <H1>Välkommen till EKOTRÄ AB.</H1>
        <StyledH3>Specialsågverk-Hyvleri mitt i Småland sedan 1997</StyledH3>
      </TextOverlay>
      <ImageContainer>
        <Image src={AcornHero} alt="Acorn image" />
      </ImageContainer>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div({
  position: 'relative',
  overflow: 'hidden',
});

const TextOverlay = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end',
  padding: { xy: huge },
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
