import { styled } from '@glitz/react';
import { AppearanceBlock, large, medium } from '../../Shared/value';
import { media } from '@glitz/core';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { useState } from 'react';
import { MenuLinkstype } from './Header';

function Full({ menuLinks }: MenuLinkstype) {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const handleMouseOver = (name: string | undefined) => {
    if (name) setDropdownOpen(name);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(null);
  };

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
            <NavLinks key={link.name} onMouseOver={() => handleMouseOver(link.name)} onMouseLeave={handleMouseLeave}>
              <NavLink
                to={link.url}
                className={({ isActive }) => ['link_nav', isActive ? 'active' : null].filter(Boolean).join(' ')}
                end
              >
                <StyledLink>{link.name}</StyledLink>
              </NavLink>
              {link.subMenu && (
                <Dropdown css={dropdownOpen === link.name && { display: 'block' }}>
                  {link.subMenu.map(subLink => (
                    <DropdownItem key={subLink.name}>
                      <NavLink to={subLink.url}>{subLink.name}</NavLink>
                    </DropdownItem>
                  ))}
                </Dropdown>
              )}
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

const Dropdown = styled.div({
  display: 'none',
  position: 'absolute',
  backgroundColor: '#fff',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 12,
  minWidth: '200px',
  top: '105%',
  left: '0',
});

const DropdownItem = styled.div({
  padding: { y: medium, x: large },
  color: '#000',
  textDecoration: 'none',
  ':hover': {
    backgroundColor: '#ddd',
  },
});
