import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import Menu from '../../Assets/menu.svg';
import { styled } from '@glitz/react';
import { DefaultGreen, medium } from '../../Shared/value';
import { media } from '@glitz/core';
import { PlainButton } from '../Components/Button';

function Header() {
  return (
    <StyledHeader>
      <DesktopContainer>
        <LogoContainer>
          <StyledImage src={logo} alt="Logo" className="logo" />
        </LogoContainer>
        <Navbar>
          <LinkContainer>
            <NavLinks>
              <Link to="/">
                <StyledLink>Home</StyledLink>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link to="/about">
                <StyledLink>About</StyledLink>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link to="/services">
                <StyledLink>Services</StyledLink>
              </Link>
            </NavLinks>
            <NavLinks>
              <Link to="/contact">
                <StyledLink>Contact</StyledLink>
              </Link>
            </NavLinks>
          </LinkContainer>
        </Navbar>
      </DesktopContainer>
      <CompactContainer>
        <PlainButton>
          <styled.Img src={Menu} width={30} />
        </PlainButton>
        <LogoContainer>
          <StyledImage src={logo} alt="Logo" className="logo" />
        </LogoContainer>
      </CompactContainer>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header({
  position: 'sticky',
  top: '0px',
  zIndex: 10,
  backgroundColor: DefaultGreen,
  border: {
    bottom: {
      style: 'solid',
      width: '2px',
      color: '#004A55',
    },
  },
});

const DesktopContainer = styled.div({
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  width: '1366px',
  maxWidth: 'calc(100vw - 65px)',
  padding: {
    y: '10px',
    x: '0px',
  },
  margin: {
    y: 0,
    x: 'auto',
  },
  ...media(
    { maxWidth: '1025px' },
    {
      display: 'none',
    },
  ),
});

const CompactContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: {
    x: medium,
  },
  ...media(
    { minWidth: '1025px' },
    {
      display: 'none',
    },
  ),
});

const LogoContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledImage = styled.img({
  maxWidth: '200px',
  ...media(
    { maxWidth: '1025px' },
    {
      maxWidth: '140px',
    },
  ),
});

const Navbar = styled.nav();

const LinkContainer = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
});

const NavLinks = styled.li({
  margin: { left: '32px' },
});

const StyledLink = styled.span({
  fontWeight: 'bold',
});
