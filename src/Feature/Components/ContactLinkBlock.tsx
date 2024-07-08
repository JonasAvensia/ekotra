import { styled } from '@glitz/react';
import { AppearanceBlock, Block, gigantic, huge, large, small } from '../../Shared/value';
import H2 from '../../Shared/Generic/H2';
import Button from './Button';
import { media } from '@glitz/core';
function ContactLinkBlock() {
  return (
    <ContactBlock>
      <Container>
        <TextWrapper>
          <H2>Kontakta oss</H2>
          <Text>Har du frågor om våra produkter eller tjänster?</Text>
        </TextWrapper>
        <ButtonWrapper>
          <Button to="/kontakta oss" arialLabel="kontakta oss">
            Kontakta oss
          </Button>
        </ButtonWrapper>
      </Container>
    </ContactBlock>
  );
}

export default ContactLinkBlock;

const ContactBlock = styled.div({
  margin: {
    top: huge,
  },
  backgroundColor: '#fff',
});

const Container = styled(AppearanceBlock, {
  padding: {
    top: large,
  },

  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '20px',
  borderRadius: '10px',
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
  ...media(
    { minWidth: '1025px' },
    {
      justifyContent: 'center',
    },
  ),
});

const Text = styled.p({});
