import { styled } from '@glitz/react';
import { AppearanceBlock, Block, gigantic, large, small } from '../../Shared/value';
import H2 from '../../Shared/Generic/H2';
import Button from './Button';
import { media } from '@glitz/core';
import { useLocation } from 'react-router-dom';

function ContactLinkBlock() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== '/kontakt' && (
        <Container>
          <Wrapper>
            <TextWrapper>
              <H2>Kontakta oss</H2>
              <Text>Har du frågor om våra produkter eller tjänster?</Text>
            </TextWrapper>
            <ButtonWrapper>
              <Button to="/kontakt" ariaLabel="kontakta oss">
                Kontakta oss
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      )}
    </>
  );
}

export default ContactLinkBlock;

const Container = styled(AppearanceBlock, {
  backgroundColor: '#fff',
});

const Wrapper = styled(Block, {
  border: {
    top: {
      style: 'solid',
      width: '1px',
      color: '#E6E6E6',
    },
  },
  backgroundColor: '#fff',
  padding: {
    y: large,
  },

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  ...media(
    { minWidth: '1025px' },
    {
      gridTemplateColumns: '1fr 1fr',
    },
  ),
});

const StyledWrapper = styled.div({
  padding: {
    xy: large,
    top: small,
  },
  ...media(
    { minWidth: '1025px' },
    {
      padding: {
        xy: gigantic,
      },
    },
  ),
});

const TextWrapper = styled(StyledWrapper, {});

const ButtonWrapper = styled(StyledWrapper, {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'end',
  ...media(
    { minWidth: '1025px' },
    {
      justifyContent: 'center',
    },
  ),
});

const Text = styled.p({});
