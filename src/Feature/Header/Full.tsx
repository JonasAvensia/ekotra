import { styled } from '@glitz/react';
import { AppearanceBlock, medium } from '../../Shared/value';
import { media } from '@glitz/core';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';

type Prototype = {
  menuLinks: {
    url: string;
    name: string;
  }[];
};

function Full({ menuLinks }: Prototype) {
  return (
    <DesktopContainer>
      <NavLink to="/">
        <LogoContainer>
          <StyledImage src={logo} alt="Logo" className="logo" />
        </LogoContainer>
      </NavLink>
      <Navbar>
        <LinkContainer>
          {menuLinks.map(link => (
            <NavLinks>
              <NavLink
                to={link.url}
                className={({ isActive }) => ['link_nav', isActive ? 'active' : null].filter(Boolean).join(' ')}
                end
              >
                <StyledLink>{link.name}</StyledLink>
              </NavLink>
            </NavLinks>
          ))}
        </LinkContainer>
      </Navbar>
    </DesktopContainer>
  );
}

export default Full;

const DesktopContainer = styled(AppearanceBlock, {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'space-between',
  padding: {
    y: '10px',
    x: medium,
  },
  ...media(
    { maxWidth: '1025px' },
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
  position: 'relative',
});

const StyledLink = styled.span({
  fontWeight: 'bold',
});
