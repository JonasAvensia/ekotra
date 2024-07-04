import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.gif';
import { styled } from '@glitz/react';

function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <img src={logo} alt="Logo" className="logo" />
      </LogoContainer>
      <Navbar>
        <LinkContainer>
          <NavLinks>
            <Link to="/">Home</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/about">About</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/services">Services</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/contact">Contact</Link>
          </NavLinks>
          <NavLinks>
            <Link to="/faq">FAQ</Link>
          </NavLinks>
        </LinkContainer>
      </Navbar>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.header({
  minHeight: '135',
});

const LogoContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: { bottom: '10px' },
});

const Navbar = styled.nav();

const LinkContainer = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
});

const NavLinks = styled.li({
  margin: { left: '32px' },
  color: 'black',
});
