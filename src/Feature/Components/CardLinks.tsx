import { styled } from '@glitz/react';
import { media } from '@glitz/core';
import { Block, large, small } from '../../Shared/value';
import { Link } from 'react-router-dom';
import woodDummy from '../../Assets/wood-dummy.jpg';
import H3 from '../../Shared/Generic/H3';
import Button from './Button';
import LazyLoadImage from './LazyLoadImage';
import SawedImage from '../../Assets/sawed-products-1.jpg';
import HorseBox from '../../Assets/products/horse-box.jpg';
import Limfog from '../../Assets/products/limfog-alm.jpg';

function CardLinks() {
  return (
    <Container>
      <Column>
        <Link to="/produkter/sagade-produkter" aria-label={'läs mer om sågade produkter'}>
          <StyledImage src={SawedImage} alt="Sågade produkter image" />
        </Link>
        <TextContainer>
          <styled.Div>
            <H3>Sågade Produkter</H3>
            <Text>Vi erbjuder sågat lövträ från de flesta svenska träslag och i de flesta dimensioner.</Text>
          </styled.Div>
          <ButtonContainer>
            <StyledButton to="/produkter/sagade-produkter" ariaLabel="Läs mer om sågade produkter">
              Läs mer
            </StyledButton>
          </ButtonContainer>
        </TextContainer>
      </Column>
      <Column>
        <Link to="/produkter/hyvlade-produkter" aria-label={'Läs mer om hyvlade produkter'}>
          <StyledImage src={woodDummy} alt="image of hyvlade produkter" />
        </Link>
        <TextContainer>
          <styled.Div>
            <H3>Hyvlade Produkter</H3>
            <Text>
              Med vårt nya hyvleri kan vi nu förädla råvaror från stock till färdiga produkter som golv och lister. Vi
              erbjuder även paneler i olika lövträslag och utföranden.
            </Text>
          </styled.Div>
          <ButtonContainer>
            <StyledButton to="/produkter/hyvlade-produkter" ariaLabel="Läs mer om hyvlade produkter">
              Läs mer
            </StyledButton>
          </ButtonContainer>
        </TextContainer>
      </Column>
      <Column>
        <Link to="/produkter/special-produkter" aria-label={'Läs mer om special produkter'}>
          <StyledImage src={HorseBox} alt="Image of Special produkter" />
        </Link>
        <TextContainer>
          <styled.Div>
            <H3>Special Produkter</H3>
            <Text>
              Vi sågar virke upp till 7 meter långt och med dimensioner upp till 400×400 mm samt tillverkar
              specialbeställda paneler och lister efter kundens önskemål.
            </Text>
          </styled.Div>
          <ButtonContainer>
            <StyledButton ariaLabel="Läs mer om special produkter" to="/produkter/special-produkter">
              Läs mer
            </StyledButton>
          </ButtonContainer>
        </TextContainer>
      </Column>
      <Column>
        <Link to="/produkter/limfog" aria-label={'Läs mer om limfog'}>
          <StyledImage src={Limfog} alt="dummy" />
        </Link>
        <TextContainer>
          <styled.Div>
            <H3>Limfog</H3>
            <Text>
              Vi erbjuder skräddarsydda lösningar som hyllplan, bordsskivor och bänkskivor i kundanpassade mått,
              färdigputsade och med möjlighet till ytbehandling.
            </Text>
          </styled.Div>
          <ButtonContainer>
            <StyledButton to="/produkter/limfog" ariaLabel="Läs mer om limfog">
              Läs mer
            </StyledButton>
          </ButtonContainer>
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
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
    },
  ),
});

const Column = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  backgroundColor: '#fff',
});

const StyledImage = styled(LazyLoadImage, {
  width: '100%',
  height: '220px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: { grow: 1 },
  justifyContent: 'space-between',
  padding: { top: small },
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
