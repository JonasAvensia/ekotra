import { styled } from '@glitz/react';
import { AppearanceBlock, DefaulBackgroundColor, DefaultGreen, huge, large, medium, small } from '../../Shared/value';
import LazyLoadImage from '../Components/LazyLoadImage';
import FooterLogo from '../../Assets/footer-logo.png';
import H3 from '../../Shared/Generic/H3';
import { NavLink } from 'react-router-dom';
import { media } from '@glitz/core';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <Wrapper>
          <Column>
            <StyledLogo src={FooterLogo} alt="footer logo" />
          </Column>
          <Column>
            <Title>Ekoträ</Title>
            <Text>Äpplaryd 3</Text>
            <Text>360 30 Lammhult</Text>
            <Text>
              <A href="tel:0046703278734">070-3278734</A>
            </Text>
          </Column>
          <Column>
            <Title>Katalog</Title>
            <Text>
              <NavLink to="/prislista">Prislista</NavLink>
            </Text>
            <Text>
              <NavLink to="/produkter">Produkter</NavLink>
            </Text>
          </Column>
          <Column>
            <Title>Öppettider</Title>
            <Text>Måndag - fredag 07.00-18.00</Text>
            <Text>Lördag - söndag 09.00-15.00</Text>
          </Column>
        </Wrapper>
      </Container>
      <CopyRightContainer>Copyright © 2024 EME Aktiv</CopyRightContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer({
  backgroundColor: DefaulBackgroundColor,
});

const Container = styled(AppearanceBlock, {
  backgroundColor: DefaulBackgroundColor,
  color: 'fff',
  padding: {
    bottom: medium,
  },
  margin: {
    y: 0,
    x: 'auto',
  },
});

const Wrapper = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '16px 0px',
  padding: { y: huge },
});

const Column = styled.li({
  flex: {
    grow: 1,
    shrink: 1,
    basis: 'auto',
  },
  margin: {
    right: large,
  },
  ...media(
    { maxWidth: '1025px' },
    {
      width: '100%',
    },
  ),
});

const Title = styled(H3, {
  color: '#fff',
  margin: {
    bottom: medium,
  },
});

const Text = styled.p({
  color: '#fff',
  margin: {
    bottom: small,
  },
});

const A = styled.a();

const CopyRightContainer = styled.div({
  textAlign: 'center',
  color: '#fff',
  border: {
    top: {
      style: 'inset',
      width: '1px',
      color: DefaultGreen,
    },
  },
  padding: {
    y: medium,
  },
});

const StyledLogo = styled(LazyLoadImage, {
  maxWidth: '200px',
});
