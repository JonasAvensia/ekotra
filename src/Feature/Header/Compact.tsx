import { styled } from '@glitz/react';
import { large, medium } from '../../Shared/value';
import { media } from '@glitz/core';
import Menu from '../../Assets/icons/menu.svg';
import { PlainButton } from '../Components/Button';
import { NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { useState } from 'react';
import CloseIcon from '../../Assets/close.svg';
import Chevron from '../../Assets/icons/chevron.svg';
import { MenuLinkstype } from './Header';

function Compact({ menuLinks }: MenuLinkstype) {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  return (
    <CompactContainer>
      <PlainButton arialLabel="Home" onClick={() => setIsOpen(true)}>
        <styled.Img src={Menu} width={24} />
      </PlainButton>
      <NavLink to="/">
        <LogoContainer>
          <StyledImage src={logo} alt="Logo" className="logo" />
        </LogoContainer>
      </NavLink>
      <Flyout css={isOpen && { transform: 'translateX(0%)' }}>
        <FlyoutHeader>
          <StyledCloseButton onClick={() => setIsOpen(false)} arialLabel="close flyout">
            <styled.Img src={CloseIcon} alt="Close Icon" width={15} />
          </StyledCloseButton>
        </FlyoutHeader>
        <Navbar>
          <Links>
            {menuLinks.map((link, index) =>
              link.subMenu ? (
                <>
                  <DropDownButton
                    onClick={() => toggleSubMenu(index)}
                    arialLabel={`Open link dropdown for ${link.name}`}
                  >
                    <Link>
                      <LinkText>{link.name}</LinkText>
                      {link.subMenu && <styled.Img src={Chevron} alt="Link arrow" width={10} />}
                    </Link>
                  </DropDownButton>
                  {link.subMenu && openMenuIndex === index && (
                    <SubMenuWrapper>
                      <SubMenu>
                        <Link>
                          <LinkText>{link.name}</LinkText>
                        </Link>
                        {link.subMenu.map(subLink => (
                          <NavLink to={subLink.url} key={subLink.name} onClick={() => setIsOpen(false)}>
                            <Link>
                              <LinkText>{subLink.name}</LinkText>
                            </Link>
                          </NavLink>
                        ))}
                      </SubMenu>
                    </SubMenuWrapper>
                  )}
                </>
              ) : (
                <NavLink to={link.url} onClick={() => setIsOpen(false)}>
                  <Link>
                    <LinkText>{link.name}</LinkText>
                    {link.subMenu && <styled.Img src={Chevron} alt="Link arrow" width={10} />}
                  </Link>
                </NavLink>
              ),
            )}
          </Links>
        </Navbar>
      </Flyout>
      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </CompactContainer>
  );
}

export default Compact;

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

const Overlay = styled.div({
  position: 'fixed',
  right: '0px',
  left: '0px',
  top: '0px',
  bottom: '0px',
  backgroundColor: 'black',
  opacity: '0.25',
});

const Flyout = styled.div({
  width: '26rem',
  backgroundColor: '#fff',
  maxWidth: 'calc(100vw - 32px)',
  zIndex: 11,
  position: 'fixed',
  height: '100%',
  top: 0,
  left: 0,
  transition: {
    duration: '400ms',
    timingFunction: 'ease-in-out',
    property: 'transform',
  },
  transform: 'translateX(-100%)',
});

const FlyoutHeader = styled.div({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  height: '55px',
  padding: {
    right: medium,
  },
  border: {
    bottom: {
      style: 'solid',
      width: '1px',
      color: '#E6E6E6',
    },
  },
});

const StyledCloseButton = styled(PlainButton, {
  margin: {
    top: '5px',
  },
});

const Navbar = styled.nav({});

const Links = styled.ul({
  display: 'flex',
  flexDirection: 'column',
});

const Link = styled.li({
  display: 'flex',
  justifyContent: 'space-between',
  padding: {
    x: large,
    y: medium,
  },
  border: {
    bottom: {
      style: 'solid',
      width: '1px',
      color: '#E6E6E6',
    },
  },
});

const LinkText = styled.span();

const DropDownButton = styled(PlainButton, {});

const SubMenuWrapper = styled.div({
  display: 'flex',
  width: '100%',
});

const SubMenu = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  fontWeight: 'bold',
  overflow: 'hidden',
  transition: {
    property: 'max-height',
    duration: '300ms',
    timingFunction: 'ease-in-out',
  },

  textDecoration: 'none',
  color: '#000',
  ':hover': {
    backgroundColor: '#f0f0f0',
  },
});
