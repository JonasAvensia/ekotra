import { styled } from '@glitz/react';
import { AppearanceBlock, DefaulBackgroundColor, medium, small } from '../../Shared/value';
import Compact from './Compact';
import Full from './Full';

const menuLinks = [
  {
    url: '/',
    name: 'Hem',
  },
  {
    url: '/produkter',
    name: 'Produkter',
  },
  {
    url: '/prislista',
    name: 'Prislista',
  },
  {
    url: '/galleri',
    name: 'Galleri',
  },
  {
    url: '/kontakt',
    name: 'Kontakt',
  },
];

function Header() {
  return (
    <StyledHeader>
      <TopBar>
        <TopBarWrapper>
          <A href="mailto:info@eme.nu">info@eme.nu</A>
          <A href="tel:0046703278734">070-3278734</A>
        </TopBarWrapper>
      </TopBar>
      <Full menuLinks={menuLinks} />
      <Compact menuLinks={menuLinks} />
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header({
  position: 'sticky',
  top: '0px',
  zIndex: 10,
  backgroundColor: '#fff',
  border: {
    bottom: {
      style: 'solid',
      width: '2px',
      color: '#004A55',
    },
  },
});

const TopBar = styled.div({
  backgroundColor: DefaulBackgroundColor,
  color: '#fff',
  padding: {
    y: small,
  },
});

const TopBarWrapper = styled(AppearanceBlock, {
  display: 'flex',
  gap: small,
  justifyContent: 'space-between',
  padding: {
    x: medium,
  },
});

const A = styled.a();
